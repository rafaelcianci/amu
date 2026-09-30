"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { SOLUTIONS } from "@/data/solutions";
import { BUDGET_OPTIONS, TIMING_OPTIONS } from "@/app/diagnostico/options";
import { renderBriefingEmail } from "@/lib/briefing-email";

export type ContactResult = { ok: true } | { ok: false; message: string };

export interface DiagnosisInput {
  name: string;
  email: string;
  service: string;
  timing: string;
  about: string;
  budget: string;
  consent: boolean;
  /** Honeypot: hidden from people, so any value means a bot filled the form. */
  website?: string;
  turnstileToken: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SEND_FAILED = "Não foi possível enviar agora. Tente de novo ou fale com a gente pelo WhatsApp 48 92003-3146.";

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function labelFor(options: { value: string; label: string }[], value: unknown) {
  return options.find((o) => o.value === value)?.label ?? "Não informado";
}

function senderAddress() {
  const from = process.env.CONTACT_EMAIL_FROM?.trim() || "contato@agenciaamu.com.br";
  return from.includes("<") ? from : `Agência AMU <${from}>`;
}

/** Cloudflare's always-pass test secret, used only outside production. */
const TURNSTILE_TEST_SECRET = "1x0000000000000000000000000000000AA";

async function verifyTurnstile(token: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY || (process.env.NODE_ENV === "production" ? "" : TURNSTILE_TEST_SECRET);
  if (!secret) {
    console.error("Contact form: TURNSTILE_SECRET_KEY is not set.");
    return false;
  }
  if (!token) return false;

  const h = await headers();
  const ip = h.get("cf-connecting-ip") ?? h.get("x-forwarded-for")?.split(",")[0]?.trim();
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set("remoteip", ip);

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body });
    const data = (await res.json()) as { success?: boolean; "error-codes"?: string[] };
    if (!data.success) console.warn("Contact form: Turnstile rejected the token.", data["error-codes"]);
    return data.success === true;
  } catch (err) {
    console.error("Contact form: could not reach Turnstile.", err);
    return false;
  }
}

async function sendToAgency(subject: string, content: { text: string; html: string }, replyTo: string): Promise<ContactResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_EMAIL_TO is not set.");
    return { ok: false, message: SEND_FAILED };
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: senderAddress(),
      to,
      replyTo,
      subject: subject.replace(/\s+/g, " "),
      ...content,
    });
    if (error) {
      console.error("Contact form: Resend rejected the email.", error);
      return { ok: false, message: SEND_FAILED };
    }
  } catch (err) {
    console.error("Contact form: could not reach Resend.", err);
    return { ok: false, message: SEND_FAILED };
  }

  return { ok: true };
}

export async function sendDiagnosis(input: DiagnosisInput): Promise<ContactResult> {
  if (clean(input.website, 200)) return { ok: true };

  const name = clean(input.name, 120);
  const email = clean(input.email, 200);
  if (!name) return { ok: false, message: "Informe seu nome." };
  if (!EMAIL_RE.test(email)) return { ok: false, message: "Informe um e-mail válido para retornarmos." };
  if (input.consent !== true) return { ok: false, message: "Autorize o uso dos dados para podermos responder." };
  if (!(await verifyTurnstile(clean(input.turnstileToken, 4096)))) {
    return { ok: false, message: "Não conseguimos confirmar que você não é um robô. Aguarde a verificação e tente de novo." };
  }

  const service = SOLUTIONS.find((s) => s.slug === input.service)?.name ?? "Não informado";
  const content = renderBriefingEmail(
    [
      ["Nome", name],
      ["E-mail", email],
      ["Serviço", service],
      ["Quando começa", labelFor(TIMING_OPTIONS, input.timing)],
      ["Verba mensal", labelFor(BUDGET_OPTIONS, input.budget)],
    ],
    clean(input.about, 5000) || "Não informado",
  );

  return sendToAgency(`Agência AMU · Novo briefing: ${name}`, content, email);
}

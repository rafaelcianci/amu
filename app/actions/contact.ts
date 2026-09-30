"use server";

import { Resend } from "resend";
import { SOLUTIONS } from "@/data/solutions";
import { BUDGET_OPTIONS, TIMING_OPTIONS } from "@/app/diagnostico/options";

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
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SEND_FAILED = "Não foi possível enviar agora. Tente de novo ou fale com a gente pelo WhatsApp 48 92003-3146.";

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function labelFor(options: { value: string; label: string }[], value: unknown) {
  return options.find((o) => o.value === value)?.label ?? "Não informado";
}

async function sendToAgency(subject: string, text: string, replyTo: string): Promise<ContactResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_EMAIL_TO is not set.");
    return { ok: false, message: SEND_FAILED };
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: process.env.CONTACT_EMAIL_FROM || "Agência AMU <onboarding@resend.dev>",
      to,
      replyTo,
      subject: subject.replace(/\s+/g, " "),
      text,
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

  const service = SOLUTIONS.find((s) => s.slug === input.service)?.name ?? "Não informado";
  const text = [
    `Nome: ${name}`,
    `E-mail: ${email}`,
    `Serviço: ${service}`,
    `Quando começa: ${labelFor(TIMING_OPTIONS, input.timing)}`,
    `Verba mensal: ${labelFor(BUDGET_OPTIONS, input.budget)}`,
    "",
    "Sobre o projeto:",
    clean(input.about, 5000) || "Não informado",
  ].join("\n");

  return sendToAgency(`Novo briefing: ${name}`, text, email);
}

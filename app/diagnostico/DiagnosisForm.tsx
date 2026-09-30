"use client";

import * as React from "react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Radio } from "@/components/ui/Radio";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { Toast } from "@/components/ui/Toast";
import { SOLUTIONS } from "@/data/solutions";
import { sendDiagnosis } from "@/app/actions/contact";
import { BUDGET_OPTIONS, TIMING_OPTIONS } from "./options";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function DiagnosisForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [service, setService] = React.useState("");
  const [timing, setTiming] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [consent, setConsent] = React.useState(false);
  const [website, setWebsite] = React.useState("");

  const [emailInvalid, setEmailInvalid] = React.useState(false);
  const [toast, setToast] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);
  const [pending, startTransition] = React.useTransition();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validEmail = EMAIL_RE.test(email.trim());
    if (!validEmail) {
      setEmailInvalid(true);
      setToast("Informe um e-mail válido para retornarmos.");
      return;
    }
    setEmailInvalid(false);

    startTransition(async () => {
      const result = await sendDiagnosis({ name, email, service, timing, about, budget, consent, website });
      if (!result.ok) {
        setToast(result.message);
        return;
      }
      setName("");
      setEmail("");
      setService("");
      setTiming("");
      setAbout("");
      setBudget("");
      setConsent(false);
      setSuccess(true);
    });
  }

  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "var(--surface-card)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-xl)",
          padding: "var(--space-7)",
          boxShadow: "var(--shadow-sm)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-5)",
        }}
      >
        <Input id="nome" label="Nome" placeholder="Seu nome" required value={name} onChange={(e) => setName(e.target.value)} />
        <Input
          id="email"
          type="email"
          label="E-mail"
          placeholder="voce@empresa.com"
          required
          value={email}
          invalid={emailInvalid}
          hint={emailInvalid ? "Informe um e-mail válido para retornarmos." : undefined}
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailInvalid) setEmailInvalid(false);
          }}
        />
        <Select
          id="servico"
          label="Serviço"
          placeholder="Qual frente te interessa?"
          value={service}
          onChange={(e) => setService(e.target.value)}
          options={SOLUTIONS.map((s) => ({ value: s.slug, label: s.name }))}
        />
        <Select id="quando" label="Quando começa" placeholder="Selecione um prazo" value={timing} onChange={(e) => setTiming(e.target.value)} options={TIMING_OPTIONS} />
        <Input
          id="sobre"
          label="Sobre o projeto"
          placeholder="Conte o que está travando o crescimento hoje"
          multiline
          rows={4}
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />

        <div>
          <div style={{ fontFamily: "var(--font-text)", fontSize: "var(--fs-body-sm)", fontWeight: "var(--fw-semibold)", color: "var(--purple-700)", marginBottom: "var(--space-3)" }}>
            Verba mensal estimada
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {BUDGET_OPTIONS.map((opt) => (
              <Radio key={opt.value} id={`budget-${opt.value}`} name="budget" value={opt.value} label={opt.label} checked={budget === opt.value} onChange={() => setBudget(opt.value)} />
            ))}
          </div>
        </div>

        <Checkbox
          id="lgpd"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          label="Autorizo o uso dos meus dados para retorno da Agência AMU, conforme a LGPD."
        />

        <input
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          style={{ position: "absolute", left: -9999, width: 1, height: 1, opacity: 0 }}
        />

        <Button type="submit" size="lg" iconRight={pending ? undefined : "arrow-right"} fullWidth disabled={!consent || pending}>
          {pending ? "Enviando…" : "Enviar briefing"}
        </Button>
      </form>

      <Dialog
        open={success}
        onClose={() => setSuccess(false)}
        title="Briefing enviado"
        description="Obrigado! Um estrategista responde em até 24h."
        footer={<Button onClick={() => setSuccess(false)}>Fechar</Button>}
      />

      {toast ? (
        <div style={{ position: "fixed", bottom: "var(--space-6)", right: "var(--space-6)", zIndex: 70 }}>
          <Toast tone="danger" title="Não foi possível enviar" message={toast} onClose={() => setToast(null)} />
        </div>
      ) : null}
    </>
  );
}

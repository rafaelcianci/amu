"use client";

import * as React from "react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Radio } from "@/components/ui/Radio";
import { Checkbox } from "@/components/ui/Checkbox";
import { Switch } from "@/components/ui/Switch";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { Toast } from "@/components/ui/Toast";
import { SOLUTIONS } from "@/data/solutions";

const TIMING_OPTIONS = [
  { value: "o-quanto-antes", label: "O quanto antes" },
  { value: "proximas-semanas", label: "Nas próximas semanas" },
  { value: "ainda-pesquisando", label: "Ainda estou pesquisando" },
];

const BUDGET_OPTIONS = [
  { value: "ate-2000", label: "Até R$ 2.000/mês" },
  { value: "2000-5000", label: "R$ 2.000 a R$ 5.000/mês" },
  { value: "acima-5000", label: "Acima de R$ 5.000/mês" },
  { value: "conversar", label: "Prefiro conversar primeiro" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function DiagnosisForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [service, setService] = React.useState("");
  const [timing, setTiming] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [consent, setConsent] = React.useState(false);
  const [newsletter, setNewsletter] = React.useState(true);

  const [emailInvalid, setEmailInvalid] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validEmail = EMAIL_RE.test(email.trim());
    if (!validEmail) {
      setEmailInvalid(true);
      setToast(true);
      return;
    }
    setEmailInvalid(false);
    setSuccess(true);
  }

  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(false), 5000);
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
          label="Autorizo o uso dos meus dados para retorno da AMUdesign, conforme a LGPD."
        />

        <Switch id="newsletter" checked={newsletter} onChange={(e) => setNewsletter(e.target.checked)} label="Quero receber o e-mail mensal do blog" />

        <Button type="submit" size="lg" iconRight="arrow-right" fullWidth disabled={!consent}>
          Enviar briefing
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
          <Toast tone="danger" title="Não foi possível enviar" message="Informe um e-mail válido para retornarmos." onClose={() => setToast(false)} />
        </div>
      ) : null}
    </>
  );
}

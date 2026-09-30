const EMAIL_TITLE = "Agência AMU";
const EMAIL_SUBTITLE = "Novo briefing recebido pelo formulário de diagnóstico do site";
const EMAIL_FOOTER = "E-mail automático do site da Agência AMU. Responda a esta mensagem para falar direto com o cliente.";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function renderBriefingEmail(fields: [string, string][], about: string) {
  const text = [
    EMAIL_TITLE.toUpperCase(),
    EMAIL_SUBTITLE,
    "",
    ...fields.map(([label, value]) => `${label}: ${value}`),
    "",
    "Sobre o projeto:",
    about,
    "",
    "--",
    EMAIL_FOOTER,
  ].join("\n");

  const rows = fields
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 16px 6px 0;color:#6B6280;white-space:nowrap;vertical-align:top">${escapeHtml(label)}</td><td style="padding:6px 0;color:#1C0035">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  const html = `<!doctype html>
<html lang="pt-BR">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:24px;background:#F8F7FF;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#FFFFFF;border-radius:12px;overflow:hidden">
    <tr><td style="background:#340065;padding:24px 32px">
      <div style="color:#FFFFFF;font-size:22px;font-weight:bold">${EMAIL_TITLE}</div>
      <div style="color:#D9CCF0;font-size:14px;margin-top:4px">${EMAIL_SUBTITLE}</div>
    </td></tr>
    <tr><td style="padding:24px 32px">
      <table role="presentation" cellpadding="0" cellspacing="0">${rows}</table>
      <div style="margin-top:20px;color:#6B6280">Sobre o projeto</div>
      <div style="margin-top:6px;color:#1C0035">${escapeHtml(about).replace(/\n/g, "<br>")}</div>
    </td></tr>
    <tr><td style="padding:16px 32px;border-top:1px solid #ECE8F5;color:#6B6280;font-size:12px">${EMAIL_FOOTER}</td></tr>
  </table>
</body>
</html>`;

  return { text, html };
}

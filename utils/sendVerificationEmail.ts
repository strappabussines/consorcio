import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(to: string, code: string) {
  await resend.sendEmail({
    from: process.env.RESEND_FROM!,
    to,
    subject: "Verifica tu cuenta",
    html: `<p>Tu código de verificación es: ${code}</p>`,
  });
}

// utils/sendVerificationEmail.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(to: string, code: string) {
  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_FROM!,
    to,
    subject: "Verifica tu cuenta",
    html: `<p>Tu código de verificación es: <strong>${code}</strong></p>`
  });

  if (error) {
    console.error("Email error:", error);
    throw new Error("Error enviando email de verificación.");
  }

  return data;

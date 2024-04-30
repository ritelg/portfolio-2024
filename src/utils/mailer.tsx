import ContactTemplate from "@/emails-templates/contact-template";
import { env } from "@/utils/env";
import { Resend } from "resend";

const resend = new Resend(env.RESEND_API_KEY);

export async function send(from: string, subject: string, message: string) {
  return await resend.emails.send({
    from: env.MAILER_FROM,
    to: env.MAILER_TO,
    subject,
    text: `Email: ${from}\n\n${message}`,
    react: <ContactTemplate from={from} subject={subject} message={message} />,
  });
}

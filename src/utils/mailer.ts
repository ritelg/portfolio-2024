import { env } from "@/utils/env";

export async function send(from: string, subject: string, message: string) {
  const emailData = {
    Messages: [
      {
        From: {
          Email: from,
          Name: "Your Name",
        },
        To: [
          {
            Email: env.MAILER_TO,
            Name: "Recipient Name",
          },
        ],
        Subject: subject,
        TextPart: message,
      },
    ],
  };
  return fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(
        `${env.MAILJET_API_PUBLIC_KEY}:${env.MAILJET_API_PRIVATE_KEY}`
      ).toString("base64")}`,
    },
    body: JSON.stringify(emailData),
  })
    .then((res) => res.json())
    .then((res) => console.log("response", res))
    .catch((err) => console.error(err));
}

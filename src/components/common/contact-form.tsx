//@ts-nocheck
//@ts-ignore
"use client";

import { useState } from "react";

import { contact } from "@/actions/contact";
import { Alert, Button, Input, Textarea } from "@/components/ui";
import { Send } from "lucide-react";

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {}

type Error = {
  [key: string]: string;
};

type Message = {
  type: string;
  message: string;
};

type StateButton = "loading" | "sending" | "to_send" | "default";

export default function ContactForm({ children, ...props }: Props) {
  const [error, setError] = useState<Error[] | []>([]);
  const [message, setMessage] = useState<Message>();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const target = e.currentTarget;
    contact(formData).then((data) => {
      if (data.type === "z-error" && data.errors) {
        setError(data.errors);
      }
      if (data.type === "danger") {
        let err: any = [];
        err[data.type] = data.message;
        setError(err);
      }
      if (data.type === "success") {
        target.reset();
        setError([]);
      }

      setMessage({ type: data.type, message: data.message ?? "" });
    });
  }
  return (
    <>
      <form {...props} onSubmit={handleSubmit}>
        <Input
          type="email"
          error={error["email"] ?? null}
          label="Email"
          id="email"
          name="email"
          required
        />
        <Input
          type="text"
          label="Sujet de votre message"
          id="sujet"
          name="sujet"
          required
          error={error["sujet"] ?? null}
        />
        <Textarea
          label="Votre message"
          error={error["message"] ?? null}
          id="message"
          name="message"
          required
        />
        {message && message.type && (
          <Alert
            type={message.type}
            message={message.message}
            showProps={true}
          />
        )}
        <Button type="submit">
          <Send size={24} />
          Envoyer
        </Button>
      </form>
    </>
  );
}

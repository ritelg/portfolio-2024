"use server";
import { send } from "@/utils/mailer";
import { z } from "zod";

const contactSchema = z.object({
  email: z.string().email("Veuillez entrer une adresse email valide"),
  sujet: z
    .string()
    .min(5, "Le sujet doit contenir au moins 5 caractères")
    .max(255, "Le sujet doit contenir maximum 255 caractères"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

export async function contact(formData: FormData) {
  let data = {
    email: "",
    sujet: "",
    message: "",
  };
  try {
    data = contactSchema.parse(Object.fromEntries(formData));
    const res = await send(data.email, data.sujet, data.message);
    return {
      type: "success",
      message: "Votre message a bien été envoyé.",
    };
  } catch (error) {
    console.log(error, data);
    if (error instanceof z.ZodError) {
      return {
        type: "z-error",
        errors: error.formErrors.fieldErrors,
      };
    }
    return { type: "danger", message: "Une erreur est survenue." };
  }
}

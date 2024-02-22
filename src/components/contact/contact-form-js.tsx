"use client";

import {useState} from "react"

import {Input, Textarea, Button} from "@/components/ui"

interface Props extends React.FormHTMLAttributes<HTMLFormElement> { }

export default function ContactFormJs({ children, ...props }: Props) {
  const [activeJs, setActiveJs] = useState(false)
  return (
  <>
    <form {...props} onClick={() => console.log('click')}>
      <Input type="email" label="Email" id="email" name="email" required/>
      <Input type="text" label="Sujet de votre message" id="email" name="email" required/>
      <Textarea label="Votre message" id="message" name="message" required/>
      <Button type="submit">Envoyer</Button>
    </form>
  </>
  )
}

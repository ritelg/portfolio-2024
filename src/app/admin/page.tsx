"use client"; 

import Editor from "@/components/ui/editor";
import {useSession} from "next-auth/react"

export default function Page() {
  
  const session = useSession()
  console.log(session)

  return (
  <>

  <h1>salut</h1>
  </>
      )
}

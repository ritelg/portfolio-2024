"use client";

import {SessionProvider} from "next-auth/react";

// Add layout component with typescript 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}



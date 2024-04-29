import "../scss/globals.scss";

import type { Metadata } from "next";

import { Favicons } from "@/components/common";


export const metadata: Metadata = {
  title: "Portfolio - Gaëtan Ritel",
  description: "Portfolio - Gaëtan Ritel - Fullstack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <Favicons/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
        //<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400,500,700&family=Open+Sans:wght@400&display=swap" rel="stylesheet"/>

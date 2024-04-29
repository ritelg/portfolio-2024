import { ContactForm } from "@/components/common";
import { MainLayout } from "@/components/layout";
import { env } from "@/libs/env";
import type { Metadata } from "next";
import Portfolio from "./portfolio";
import Services from "./services";

export const metadata: Metadata = {
  title: "Portfolio - Gaetan Ritel",
  description:
    "Transformez votre vision en réalité avec des designs web époustouflants, des flyers percutants et des logos qui marquent les esprits. Découvrez comment nous donnons vie à vos idées dès aujourd’hui !",
  keywords: [
    "Création de sites internet",
    "Création de flyers",
    "Développeur web",
    "Designer",
  ],
  authors: [{ name: "Gaetan Ritel" }],
  publisher: "Gaetan Ritel",
  creator: "Gaetan Ritel",
  openGraph: {
    title: "Portfolio - Gaetan Ritel",
    description:
      "Transformez votre vision en réalité avec des designs web époustouflants, des flyers percutants et des logos qui marquent les esprits. Découvrez comment nous donnons vie à vos idées dès aujourd’hui !",
    url: `${env.NEXTAUTH_URL}/`,
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: `${env.NEXTAUTH_URL}/images/screencapture.jpg`,
        width: 1000,
        height: 563,
        alt: "Portfolio - Gaetan Ritel",
      },
    ],
  },
  twitter: {
    site: "@gaetanritel",
    card: "summary_large_image",
  },
};

export default async function Home() {
  return (
    <MainLayout>
      <Services />
      <Portfolio />
      <section className="contact container" id="contact">
        <div>
          <h2>Me contacter</h2>
          <p>
            Prêt à concrétiser vos visions en ligne et sur support papier ?{" "}
            <br />
            Partagez vos projets avec moi et travaillons ensemble pour créer une
            présence distinctive et impactante, grâce à des sites web
            exceptionnels, des designs graphiques mémorables, des flyers
            captivants et des cartes de visite qui laissent une impression
            durable.
          </p>
        </div>
        <ContactForm />
      </section>
    </MainLayout>
  );
}

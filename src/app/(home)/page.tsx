import type { Metadata } from 'next'
import { MainLayout } from "@/components/layout";
import { ContactForm } from "@/components/contact";
import Services from "./services";
import Portfolio from "./portfolio";
import {env} from "@/libs/env";
 
export const metadata: Metadata = {
  title: 'Portfolio - Gaetan Ritel',
  description: 'Transformez votre vision en réalité avec des designs web époustouflants, des flyers percutants et des logos qui marquent les esprits. Découvrez comment nous donnons vie à vos idées dès aujourd’hui !',
  keywords: ['Création de sites internet', 'Création de flyers', 'Développeur web', 'Designer'],
  authors: [{ name: 'Gaetan Ritel' }],
  publisher: 'Gaetan Ritel',
  creator: 'Gaetan Ritel',
  openGraph: {
    title: 'Portfolio - Gaetan Ritel',
    description: 'Transformez votre vision en réalité avec des designs web époustouflants, des flyers percutants et des logos qui marquent les esprits. Découvrez comment nous donnons vie à vos idées dès aujourd’hui !',
    url: `${env.NEXTAUTH_URL}/`,
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: `${env.NEXTAUTH_URL}/images/screencapture.jpg`,
        width: 1000,
        height: 563,
        alt: 'Portfolio - Gaetan Ritel'
      }
    ]
  },
  twitter: {
    site: '@gaetanritel',
    card: 'summary_large_image'
  }
}


export default async function Home() {
  return (
  <MainLayout>
   <Services />
   <Portfolio />
   <ContactForm />
  </MainLayout>
  );
}


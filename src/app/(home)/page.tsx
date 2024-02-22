import { MainLayout } from "@/components/layout";
import { ContactForm } from "@/components/contact";
import Services from "./services";
import Portfolio from "./portfolio";
import {seed} from "@/utils/seed-db";
import {AlertTriangle} from "lucide-react";
import VideoYoutube from "@/components/ui/video-youtube";


export default async function Home() {
  // const session = await getAuthSession();

  return (
  <MainLayout>
   <Services />
   <Portfolio />
   <ContactForm />
  </MainLayout>
  );
}


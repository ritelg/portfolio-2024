import { MainLayout } from "@/components/layout";
import { ContactForm } from "@/components/contact";
import Services from "./services";
import Portfolio from "./portfolio";
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


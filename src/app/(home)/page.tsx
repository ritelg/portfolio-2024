import { MainLayout } from "@/components/layout";
import { ContactForm } from "@/components/contact";
import Services from "./services";
import Portfolio from "./portfolio";
import SvgIcon from "@/components/ui/svg-icon";

export default async function Home() {
  return (
  <MainLayout>
   <Services />
   <Portfolio />
   <ContactForm />
  </MainLayout>
  );
}


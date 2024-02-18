import Header from "@/components/layout/includes/header";
import Services from "./services";
import Portfolio from "./portfolio";
import Modal from "@/components/modules/modal";
import {seed} from "@/utils/seed-db";


export default async function Home() {
  // const session = await getAuthSession();
  // await seed();
  return (
   <>
   <Header />
   <Services />
   <Portfolio />
   </> 
  );
}


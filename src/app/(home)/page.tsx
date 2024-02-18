import Footer from "@/components/layout/includes/footer";
import Header from "@/components/layout/includes/header";
import {getAuthSession} from "@/libs/auth";
import {seed} from "@/utils/seed-db";


export default async function Home() {
  // const session = await getAuthSession();
  return (
   <>
   <Header />
    <main >
      <Footer />
    </main>
   </> 
  );
}


import Footer from "@/components/layout/includes/footer";
import Header from "@/components/layout/includes/header";
import {getAuthSession} from "@/libs/auth";


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


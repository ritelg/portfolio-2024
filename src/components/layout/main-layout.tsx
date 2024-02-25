import {
  Header,
  Footer
} from "@/components/common";

type LayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

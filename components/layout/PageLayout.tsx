import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "../ui/WhatsAppButton";

type Props = {
  children: ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {children}
      </main>

      <WhatsAppButton />

    <Footer />
    </>
  );
}
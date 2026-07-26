import { ReactNode } from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <>
      <TopBar />

      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}
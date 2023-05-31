import Head from "next/head";
import Image from "next/image";
import { Nunito } from "next/font/google";
import Description from "./components/Description";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Taufiq Mahdi's Portfolio</title>
        <meta name="description" content="Muhammad Taufiq Mahdi's Portfolio Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${nunito.className} bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600`}
      >
        <div className="max-w-5xl w-11/12 mx-auto flex flex-col gap-16 items-center min-h-screen">
          {/* <Navbar /> */}
          <Description />
          <Portfolio />
          <Timeline />
          <ContactForm />
          <Footer />
        </div>
      </main>
    </>
  );
}

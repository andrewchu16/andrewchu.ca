import ContactLinks from "@/components/ContactLinks";
import Navbar from "@/components/nav-bar/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.svg" type="image/svg" />
      </Head>
      <div className="font-sans h-screen w-screen flex flex-col">
        <div className="flex flex-col justify-center items-center flex-grow">
          <h1 className="text-6xl font-bold mb-1">Andrew Chu</h1>
          <h2 className="text-3xl text-secondary mb-2.5">CS @ UWaterloo</h2>
          <ContactLinks />
        </div>
        <div className="w-screen absolute bottom-4 left-0 flex justify-center">
          <Navbar />
        </div>
      </div>
    </>
  );
}
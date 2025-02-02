import ContactLinks from "@/components/ContactLinks";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.svg" type="image/svg" />
        <meta property="og:title" content="Andrew Chu" />
        <meta property="og:description" content="Andrew's personal portfolio website." />
        <meta property="og:image" content="/icon.svg" />
        <meta property="og:url" content="https://andrewchu.ca" />
        <meta property="og:type" content="website" />
        <meta property="thumbnail" content="/icon.svg" />
      </Head>
      <div className="h-screen w-screen flex flex-col">
        <div className="flex flex-col justify-center items-center flex-grow">
          <h1 className="text-4xl sm:text-6xl font-bold mb-1">Andrew Chu</h1>
          <h2 className="text-xl sm:text-3xl text-secondary mb-2.5">CS @ UWaterloo</h2>
          <ContactLinks />
        </div>
      </div>
    </>
  );
}

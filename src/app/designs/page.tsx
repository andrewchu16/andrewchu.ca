import Head from "next/head";

export default function Designs() {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.svg" type="image/svg" />
        <meta property="og:title" content="Andrew Chu" />
        <meta
          property="og:description"
          content="Andrew's personal portfolio website."
        />
        <meta property="og:image" content="/icon.svg" />
        <meta property="og:url" content="https://andrewchu.ca" />
        <meta property="og:type" content="website" />
        <meta property="thumbnail" content="/icon.svg" />
      </Head>
      <div className="h-screen">Designs</div>
    </>
  );
}

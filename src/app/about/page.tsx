import WebLink from "@/components/utils/WebLink";
import Head from "next/head";

export default function About() {
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
      <div className="pt-[126px] sm:pt-0 min-h-screen w-screen flex flex-col">
        <div className="px-2.5 sm:px-0 flex flex-col justify-start sm:justify-center items-center flex-grow">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">About</h1>
          <div className="max-w-[34rem] flex flex-col gap-3 text-body">
            <p>
              Hi! I&apos;m a CS student at the University of Waterloo passionate
              about learning and building new things. I&apos;ve attended 20+
              hackathons and won awards at 9 of them, including{" "}
              <WebLink href="https://hackthe6ix.com/">Hack the 6ix</WebLink>,{" "}
              <WebLink href="https://www.deltahacks.com/">DeltaHacks</WebLink>,
              and{" "}
              <WebLink href="https://genaigenesis.ca/">GenAI Genesis</WebLink>. I&apos;ve also won 2 designathons.
            </p>
            <p>
              I have strong experience in full-stack web development, working
              mainly with Next.js, FastAPI, and Express.js.
            </p>
            <p>
              My work experience includes being a Software Engineer Intern at{" "}
              <WebLink href="https://www.cgi.com/">CGI</WebLink>, where I
              developed an enterprise RAG chatbot, a Data Engineer Intern at{" "}
              <WebLink href="https://www.alljoined.com/">Alljoined</WebLink>,
              where I improved timing accuracy and verified brainwave data
              correctness, and a Full-Stack Engineer at{" "}
              <WebLink href="https://digitalmarketingplus.com/">
                Digitera
              </WebLink>
              , where I developed a role-based school news app.
            </p>
            <p>
              I&apos;ve also organized, mentored, and judged at hackathons{" "}
              including <WebLink href="https://yrhacks.ca/">YRHacks</WebLink>,{" "}
              <WebLink href="https://hack404.dev/">Hack404</WebLink>, and{" "}
              <WebLink href="https://www.jamhacks.ca/">JAMHacks</WebLink>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

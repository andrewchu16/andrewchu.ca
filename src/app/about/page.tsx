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
        <div className="px-1 sm:px-0 flex flex-col justify-start sm:justify-center items-center flex-grow">
          <h1 className="text-4xl font-bold mb-2">About</h1>
          <div className="max-w-[34rem] flex flex-col gap-3 text-body">
            <p>
              Hi! I&apos;m a CS student at the University of Waterloo who loves
              learning and trying new things.
            </p>
            <p>
              I&apos;m highly experienced in full-stack web development. My main
              tech stacks are React, Svelte, TailwindCSS, JS/TS, Firebase,
              Flask, and Express.js. I&apos;ve explored{" "}
              <WebLink href="https://dorahacks.io/buidl/17834">
                brainwave processing
              </WebLink>
              ,{" "}
              <WebLink href="https://github.com/andrewchu16/tinyraytracer">
                computer graphics
              </WebLink>
              , and{" "}
              <WebLink href="https://github.com/andrewchu16/lilac-editor">
                desktop applications
              </WebLink>
              .
            </p>
            <p>
              Previously, I was a Data Engineer Intern at{" "}
              <WebLink href="https://www.alljoined.com/">Alljoined</WebLink>,
              where I worked to improve timing accuracy and verify data
              correctness of brainwave data. I was also a Full-Stack Engineer at{" "}
              <WebLink href="https://digitalmarketingplus.com/">
                Digitera
              </WebLink>
              , where I developed a role-based school news app for students and
              school administrations.
            </p>
            <p>
              In my free time, I play a bunch of instruments and{" "}
              <WebLink href="https://devpost.com/Previouslynamedjeff">
                attend hackathons
              </WebLink>
              . I&apos;ve participated in 20+ hackathons and won awards at
              YRHacks, Hack49, DeltaHacks, and more. I was an event logistics
              organizer for{" "}
              <WebLink href="https://yrhacks.ca">YRHacks 2024</WebLink>. I
              coordinated schedules, managed real-time event updates, and
              resolved logistical challenges, helping bridge the gap between all
              stakeholders involved. I was also a mentor and judge for
              GeeseHacks and NRGHacks.
            </p>
            <p>I am currently exploring robotics and advanced raytracing.</p>
          </div>
        </div>
      </div>
    </>
  );
}

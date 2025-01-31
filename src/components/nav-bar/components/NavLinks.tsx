import TransitionLink from "@/components/utils/TransitionLink";

const links: {
  name: string;
  url: string;
}[] = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Projects", url: "/projects" },
  // { name: "Designs", url: "/designs" },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <TransitionLink
          key={link.name}
          href={link.url}
          sleepEnterMs={300}
          sleepExitMs={300}
          className="text-lg text-secondary hover:text-primary"
        >
          {link.name}
        </TransitionLink>
      ))}
    </>
  );
}

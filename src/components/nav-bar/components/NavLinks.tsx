import TransitionLink from "@/components/utils/TransitionLink";

const links: {
  name: string;
  url: string;
  transitionClass: string;
}[] = [
  { name: "Home", url: "/", transitionClass: "home" },
  { name: "About", url: "/about", transitionClass: "about" },
  { name: "Projects", url: "/projects", transitionClass: "projects" },
  { name: "Designs", url: "/designs", transitionClass: "designs" },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <TransitionLink
          key={link.name}
          href={link.url}
          sleepEnterMs={500}
          sleepExitMs={200}
          transitionClass={link.transitionClass}
          className="text-lg text-secondary hover:text-primary"
        >
          {link.name}
        </TransitionLink>
      ))}
    </>
  );
}

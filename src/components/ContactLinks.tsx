const links: { name: string; url: string; target: string }[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/andrew-chu-0b835025a",
    target: "_blank",
  },
  { name: "Resume", url: "/Resume.pdf", target: "_blank" },
  { name: "Email", url: "mailto:hello@andrewchu.ca", target: "_blank" },
  { name: "GitHub", url: "https://github.com/andrewchu16", target: "_blank" },
];

export default function ContactLinks() {
  return (
    <div className="flex space-x-4">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target={link.target}
          className="text-lg text-secondary hover:text-primary"
        >
          {link.name.toLowerCase()}
        </a>
      ))}
    </div>
  );
}

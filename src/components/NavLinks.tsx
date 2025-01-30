import Link from "next/link";

const links: { name: string; url: string }[] = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Projects", url: "/projects" },
  { name: "Designs", url: "/Designs" },
];

export default function NavLinks() {
  return (
    <div className="flex gap-4">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          className="text-lg text-secondary hover:text-primary"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}

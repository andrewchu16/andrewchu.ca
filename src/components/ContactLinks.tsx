import contactLinks from "@/data/contactLinks";

export default function ContactLinks() {
  return (
    <div className="flex flex-row gap-2">
      {contactLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target={link.target}
          className="text-secondary hover:text-primary"
        >
          {link.name.toLowerCase()}
        </a>
      ))}
    </div>
  );
}

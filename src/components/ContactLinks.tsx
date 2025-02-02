import contactLinks from "@/data/contactLinks";

export default function ContactLinks() {
  return (
    <div className="flex space-x-4">
      {contactLinks.map((link) => (
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

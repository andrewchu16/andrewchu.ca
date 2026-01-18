import contactLinks from "@/data/contactLinks";

export default function ContactLinks() {
  return (
    <div className="flex sm:flex-row flex-col gap-2 items-center">
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

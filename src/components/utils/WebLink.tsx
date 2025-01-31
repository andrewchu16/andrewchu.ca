import { ReactNode } from "react";

interface WebLinkProps {
  href: string;
  children: ReactNode;
}

export default function WebLink({ href, children }: WebLinkProps) {
  return (
    <a href={href} className="font-semibold text-primary hover:underline">
      {children}
    </a>
  );
}

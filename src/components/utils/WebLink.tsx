import { ReactNode } from "react";

interface WebLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function WebLink({ href, children, className }: WebLinkProps) {
  return (
    <a
      href={href}
      className={`font-medium text-primary hover:underline ${className}`}
      target="_blank"
    >
      {children}
    </a>
  );
}

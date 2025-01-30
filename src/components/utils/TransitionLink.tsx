"use client";

import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

interface TransitionProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  sleepEnterMs?: number;
  sleepExitMs?: number;
  transitionClass?: string;
  className: string | undefined;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function TransitionLink({
  children,
  href,
  sleepEnterMs = 0,
  sleepExitMs = 0,
  className,
  transitionClass = "",
  ...props
}: TransitionProps) {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    document.body.classList.remove("home");
    document.body.classList.remove("projects");
    document.body.classList.remove("about");
    document.body.classList.remove("designs");
    document.body.classList.add(transitionClass);
    document.body.classList.add("page-transition");

    await sleep(sleepEnterMs);
    
    router.push(href);
    
    await sleep(sleepExitMs);
    document.body.classList.remove("page-transition");
  };
  return (
    <Link
      href={href}
      {...props}
      onClick={handleTransition}
      className={className}
    >
      {children}
    </Link>
  );
}

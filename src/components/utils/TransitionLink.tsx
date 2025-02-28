"use client";

import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

interface TransitionProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  sleepEnterMs?: number;
  sleepExitMs?: number;
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
  ...props
}: TransitionProps) {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    document.body.classList.add("page-transition");

    router.prefetch(href);
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

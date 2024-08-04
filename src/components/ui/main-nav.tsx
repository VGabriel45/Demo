"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { Icons } from "./icons";
import Image from "next/image";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image src={"/entrify_logo.png"} alt="Entrify.xyz" width={32} height={32} />
        <span className="hidden font-bold sm:inline-block">{siteConfig.logoName}</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {/*  <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Dashboard
        </Link> */}
      </nav>
    </div>
  );
}

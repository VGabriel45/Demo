import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { MainNav } from "../ui/main-nav";
import { MobileNav } from "../ui/mobile-nav";
import { buttonVariants } from "../ui/button";

export function HomePageHeader() {
  return (
    <header className="top-0 z-50 w-full border-b border-border/40 backdrop-blur">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.twitter className="h-3 w-3 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

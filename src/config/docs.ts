import { MainNavItem, SidebarNavItem } from "@/types/Nav";
import { siteConfig } from "./site";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Login",
      href: "/login",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Twitter",
          href: siteConfig.links.twitter,
          items: [],
        },
      ],
    },
  ],
};

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import {
  Blocks,
  Home,
  Package2,
  Settings,
  MountainSnow,
  LucideIcon,
  Users,
  Navigation,
} from "lucide-react";
import React from "react";

export interface LinkNav {
  id: number;
  name: string;
  icon: LucideIcon;
  url: string;
}

export const links: LinkNav[] = [
  {
    id: 1,
    name: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    id: 2,
    name: "Categories",
    url: "/dashboard/categories",
    icon: Blocks,
  },
  {
    id: 3,
    name: "Users",
    url: "/dashboard/users",
    icon: Users,
  },
  {
    id: 4,
    name: "Place",
    url: "/dashboard/places",
    icon: MountainSnow,
  },
  {
    id: 5,
    name: "Trips",
    url: "/dashboard/trips",
    icon: Navigation,
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base bg-primary-blue"
        >
          <Package2 className="h-5 w-5 transition-all text-white group-hover:scale-110" />
          <span className="sr-only text-custom-Strong-Iris">Travolks!</span>
        </Link>
        <TooltipProvider>
          {links.map((link) => {
            return (
              <Tooltip key={link.id}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.url}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-black transition-colors hover:text-white md:h-8 md:w-8 hover:bg-primary-blue-light"
                  >
                    <link.icon className="h-5 w-5" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="text-custom-Strong-Iris"
                >
                  {link.name}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/settings"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-white md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5 text-primary-blue" />
                <span className="sr-only text-custom-Strong-Iris">
                  Settings
                </span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="text-custom-Strong-Iris">
              Settings
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
};

export default Sidebar;

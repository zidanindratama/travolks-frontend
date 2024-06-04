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
  PersonStanding,
  MountainSnow,
} from "lucide-react";
import React from "react";

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
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard"
                className="flex h-9 w-9 items-center bg-primary-blue-lightest justify-center rounded-lg text-black transition-colors hover:text-white md:h-8 md:w-8 hover:bg-primary-blue-light"
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="text-custom-Strong-Iris">
              Dashboard
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/categories"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-black transition-colors hover:text-white md:h-8 md:w-8 hover:bg-primary-blue-light"
              >
                <Blocks className="h-5 w-5" />
                <span className="sr-only">Categories</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="text-custom-Strong-Iris">
              Categories
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/users"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-black transition-colors hover:text-white md:h-8 md:w-8 hover:bg-primary-blue-light"
              >
                <PersonStanding className="h-5 w-5" />
                <span className="sr-only">Users</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="text-custom-Strong-Iris">
              Users
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/places"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-black transition-colors hover:text-white md:h-8 md:w-8 hover:bg-primary-blue-light"
              >
                <MountainSnow className="h-5 w-5" />
                <span className="sr-only">Places</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="text-custom-Strong-Iris">
              Places
            </TooltipContent>
          </Tooltip>
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

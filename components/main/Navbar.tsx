import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Map } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Link {
  id: number;
  href: string;
  name: string;
}

const links: Link[] = [
  {
    id: 1,
    href: "/",
    name: "Home",
  },
  {
    id: 2,
    href: "/about",
    name: "About",
  },
  {
    id: 3,
    href: "/contact",
    name: "Contact",
  },
];

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center max-w-7xl mx-auto px-6">
      <Link
        href={"/"}
        className="font-bold text-primary-blue hover:text-primary-blue-light uppercase text-xl"
      >
        travolks!
      </Link>
      <div className="hidden md:flex flex-row gap-8 items-center justify-between">
        <div className="flex flex-row gap-8 item-center">
          {links.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.href}
                className="text-semibold hover:text-primary-blue-light"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <Button variant={"primaryBlue"} asChild>
          <Link href="#">Sign In</Link>
        </Button>
      </div>
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger>
            <Map className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent>
            <div className="mt-12 flex flex-col gap-8 item-center">
              {links.map((link) => {
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="text-semibold hover:text-primary-blue-light"
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="w-full flex flex-row gap-4 items-center">
                <Button variant={"outlineBlue"} className="w-full" asChild>
                  <Link href="#">Sign Up</Link>
                </Button>
                <Button variant={"primaryBlue"} className="w-full" asChild>
                  <Link href="#">Sign In</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;

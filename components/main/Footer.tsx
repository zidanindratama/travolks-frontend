import { Github, Link2, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <div className="mt-16">
      <Separator />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Link
            href={"/"}
            className="font-bold text-primary-blue hover:text-primary-blue-light uppercase text-xl md:text-3xl"
          >
            travolks!
          </Link>
          <p className="mt-2 mb-4 text-justify md:w-6/12">
            Powered by Next.js and Nest.js, it&apos;s a dynamic fusion of
            frontend and backend expertise. Join us on this journey where
            innovation meets elegance.
          </p>
          <div className="mt-3 space-y-3">
            <div className="flex flex-row gap-3">
              <Phone className="w-5 h-5 text-primary-blue" />
              <p>0877-1404-4760</p>
            </div>
            <div className="flex flex-row gap-3">
              <Mail className="w-5 h-5 text-primary-blue" />
              <p>zidanindratama03@gmail.com</p>
            </div>
            <div className="flex flex-row gap-3">
              <Github className="w-5 h-5 text-primary-blue" />
              <Link
                href={"https://github.com/zidanindratama/travolks-frontend"}
              >
                My GitHub Repo
              </Link>
            </div>
            <div className="flex flex-row gap-3">
              <Link2 className="w-5 h-5 text-primary-blue" />
              <Link
                href={"https://zidanindratama.vercel.app"}
                className="capitalize"
              >
                My other projects
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h1 className="text-primary-blue font-bold text-xl">
                Navigations
              </h1>
              <div className="flex flex-col gap-3">
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/contact"}>Contact</Link>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-primary-blue font-bold text-xl">Supports</h1>
              <div className="flex flex-col gap-3">
                <Link href={"/faq"}>FAQ</Link>
                <Link href={"https://wa.me/6287714044760"}>Whatsapp</Link>
              </div>
            </div>
          </div>
          <h1 className="mt-8 text-center md:text-left">
            &copy; 2024. Made by{" "}
            <span className="text-primary-blue">Zidan Indratama</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;

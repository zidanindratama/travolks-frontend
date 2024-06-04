import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center m-auto space-y-6">
      <div className="font-semibold text-center text-4xl capitalize">
        Page Not Found
      </div>
      <Image
        src={"/gif/not-found.gif"}
        alt="not found"
        width={300}
        height={300}
      />
      <Link href="/">
        <Button variant={"primaryBlue"}>Back to Home Page</Button>
      </Link>
    </div>
  );
};

export default NotFound;

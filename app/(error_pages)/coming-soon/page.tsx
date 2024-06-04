import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center m-auto space-y-6">
      <div className="font-semibold text-center text-4xl capitalize">
        Coming Soon
      </div>
      <Image
        src={"/gif/coming-soon.gif"}
        alt="coming soon"
        width={300}
        height={300}
      />
      <Link href="/">
        <Button variant={"primaryBlue"}>Back to Home Page</Button>
      </Link>
    </div>
  );
};

export default page;

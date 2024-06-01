import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <div className="my-12 md:my-24 flex flex-col-reverse md:flex-row justify-between items-center">
      <div className="flex flex-col">
        <div className="space-y-2">
          <h3 className="text-primary-blue font-semibold text-sm md:text-lg uppercase">
            Explore Your Next Adventure
          </h3>
          <h1 className="capitalize font-bold text-xl md:text-3xl">
            Find Your Perfect Destination
          </h1>
        </div>
        <p className="text-justify md:w-9/12 my-6">
          Ready to embark on your next adventure? Discover breathtaking
          destinations and unforgettable experiences awaiting you. Start
          planning your trip today!
        </p>
        <div className="flex flex-row items-center gap-x-6">
          <Button variant={"primaryBlue"} className="w-full md:w-fit">
            Join Us
          </Button>
          <Button variant={"outlineBlue"} className="w-full md:w-fit">
            Learn More
          </Button>
        </div>
      </div>
      <Image
        alt="cta-image"
        src={"/images/cta.jpg"}
        width={450}
        height={450}
        className="rounded-md mb-6 md:mb-0"
      />
    </div>
  );
};

export default CTA;

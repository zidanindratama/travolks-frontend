import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const HeroLanding = () => {
  return (
    <div className="mt-16 flex flex-col-reverse md:flex-row items-center">
      <div className="md:-mt-24 flex flex-col gap-6">
        <p className="text-sm bg-primary-blue-lightest text-primary-blue font-bold px-3 py-1 w-fit rounded-full">
          Discover the World with Us
        </p>
        <h1 className="font-bold text-2xl md:text-5xl">
          Your Next Adventure Awaits with Our{" "}
          <span className="text-primary-blue">Exclusive </span>Tours
        </h1>
        <h3 className="md:w-10/12">
          Explore stunning destinations, experience new cultures, and create
          unforgettable memories. Join us for an extraordinary journey filled
          with adventure, relaxation, and excitement.
        </h3>
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
        alt="hero-image"
        src={"/images/hero.png"}
        width={800}
        height={800}
      />
    </div>
  );
};

export default HeroLanding;

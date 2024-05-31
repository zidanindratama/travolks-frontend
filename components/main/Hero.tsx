import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative mt-12">
      <Image
        src={"/hero.jpg"}
        alt="hero"
        width={1200}
        height={1200}
        className="h-48 md:h-96 object-cover rounded-lg brightness-[0.60]"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white font-semibold text-lg md:text-3xl">
          Enjoy Your Dream Vacation
        </h1>
        <p className="text-white/90 max-w-sm md:max-w-xl text-center text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
          animi. Distinctio rem impedit totam quibusdam, numquam sed nam.
        </p>
      </div>
    </div>
  );
};

export default Hero;

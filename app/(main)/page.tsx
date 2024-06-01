import FindDestination from "@/components/main/FindDestination";
import HeroLanding from "@/components/main/HeroLanding";
import Navbar from "@/components/main/Navbar";
import Reservation from "@/components/main/Reservation";
import Testimonials from "@/components/main/Testimonials";
import Vacation from "@/components/main/Vacation";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col max-w-7xl justify-center mx-auto p-6">
      <Navbar />
      <HeroLanding />
      <Vacation />
      <Reservation />
      <FindDestination />
      <Testimonials />
    </div>
  );
};

export default Home;

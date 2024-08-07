import CTA from "@/components/main/CTA";
import FAQ from "@/components/main/FAQ";
import FindDestination from "@/components/main/FindDestination";
import Footer from "@/components/main/Footer";
import HeroLanding from "@/components/main/HeroLanding";
import Navbar from "@/components/main/Navbar";
import Reservation from "@/components/main/Reservation";
import Testimonials from "@/components/main/Testimonials";
import Vacation from "@/components/main/Vacation";
import React from "react";

const Home = () => {
  return (
    <>
      <div className=" sticky top-0 py-4 bg-white drop-shadow z-10">
        <Navbar />
      </div>
      <div className="flex flex-col max-w-7xl justify-center mx-auto p-6">
        <HeroLanding />
        <Vacation />
        <Reservation />
        <FindDestination />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </>
  );
};

export default Home;

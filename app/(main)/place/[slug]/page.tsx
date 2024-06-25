import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import PlaceDetail from "@/components/main/place/PlaceDetail";
import React from "react";

const page = ({ params }: any) => {
  return (
    <>
      <div className=" sticky top-0 py-4 bg-white drop-shadow z-10">
        <Navbar />
      </div>
      <div className="flex flex-col max-w-7xl justify-center mx-auto p-6">
        <PlaceDetail slug={params.slug} />
        <Footer />
      </div>
    </>
  );
};

export default page;

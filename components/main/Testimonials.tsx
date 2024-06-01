import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface Testimonial {
  id: number;
  image: string;
  name: string;
  position: string;
  description: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    image: "/images/person-1.jpg",
    name: "John Doe",
    position: "Travel Enthusiast",
    description: "Had an amazing experience with the team! Highly recommended!",
  },
  {
    id: 2,
    image: "/images/person-2.jpg",
    name: "Jane Smith",
    position: "Adventure Seeker",
    description:
      "The trip exceeded all my expectations. Can't wait for my next adventure!",
  },
  {
    id: 3,
    image: "/images/person-3.jpg",
    name: "Michael Johnson",
    position: "World Explorer",
    description:
      "Booking through this platform was the best decision I made! Thank you for an unforgettable experience!",
  },
];

const Testimonials = () => {
  return (
    <div className="my-16 md:mt-36">
      <div className="space-y-2 flex flex-col m-auto justify-center items-center">
        <h3 className="text-primary-blue font-semibold text-sm md:text-lg uppercase">
          Happy Customers Speak
        </h3>
        <h1 className="capitalize font-bold text-xl md:text-3xl">
          Hear What Our Clients Say
        </h1>
        <p className="text-center text-sm md:text-base md:w-9/12">
          We&apos;ve had the pleasure of serving countless satisfied travelers.
          Here&apos;s what some of them have to say about their experiences with
          us
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {testimonialsData.map((testimony) => {
          return (
            <Card className="drop-shadow-md mx-auto grid" key={testimony.id}>
              <CardHeader>
                <Image
                  src={testimony.image}
                  alt={`testimony-${testimony.id}`}
                  width={600}
                  height={600}
                  className="rounded-full object-cover w-24 h-24 drop-shadow-md mx-auto"
                />
              </CardHeader>
              <CardContent className="text-center md:text-xl">
                <p>&quot;{testimony.description}&quot;</p>
              </CardContent>
              <CardFooter className="text-center flex flex-col">
                <h1 className="capitalize font-semibold text-lg">
                  {testimony.name}
                </h1>
                <p className="text-primary-blue text-sm font-bold capitalize">
                  {testimony.position}
                </p>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;

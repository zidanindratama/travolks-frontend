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
    name: "Lorem ipsum dolor sit.",
    position: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    image: "/images/person-2.jpg",
    name: "Lorem ipsum dolor sit.",
    position: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    image: "/images/person-3.jpg",
    name: "Lorem ipsum dolor sit.",
    position: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Testimonials = () => {
  return (
    <div className="my-16 md:my-36">
      <div className="space-y-2 flex flex-col m-auto justify-center items-center">
        <h3 className="text-primary-blue font-semibold text-sm md:text-lg uppercase">
          Lorem, ipsum dolor.
        </h3>
        <h1 className="capitalize font-bold text-xl md:text-3xl">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="text-center md:w-9/12">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam iure
          sunt aut accusamus rem. Delectus nisi voluptates facere quasi atque
          debitis illum dolorem corporis tempora!
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {testimonialsData.map((testimony) => {
          return (
            <Card
              className="flex flex-col m-auto justify-center items-center drop-shadow-md"
              key={testimony.id}
            >
              <CardHeader>
                <Image
                  src={testimony.image}
                  alt={`testimony-${testimony.id}`}
                  width={600}
                  height={600}
                  className="rounded-full object-cover w-24 h-24 drop-shadow-md"
                />
              </CardHeader>
              <CardContent className="text-center">
                <p>{testimony.description}</p>
              </CardContent>
              <CardFooter className="text-center flex flex-col">
                <h1>{testimony.name}</h1>
                <p className="text-primary-blue text-sm font-bold">
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

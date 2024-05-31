import { ChevronRight, Plane } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Vacation {
  id: number;
  image: string;
  title: string;
  description: string;
}

const vacations: Vacation[] = [
  {
    id: 1,
    image: "/image-1.jpg",
    title: "Lorem ipsum dolor sit.",
    description: "Lorem, ipsum dolor.",
  },
  {
    id: 2,
    image: "/image-2.jpg",
    title: "Lorem ipsum dolor sit.",
    description: "Lorem, ipsum dolor.",
  },
  {
    id: 3,
    image: "/image-3.jpg",
    title: "Lorem ipsum dolor sit.",
    description: "Lorem, ipsum dolor.",
  },
  {
    id: 4,
    image: "/image-4.jpg",
    title: "Lorem ipsum dolor sit.",
    description: "Lorem, ipsum dolor.",
  },
];

const Vacation = () => {
  return (
    <div className="my-16 md:mt-0">
      <div className="space-y-2">
        <h3 className="text-primary-blue font-semibold text-sm md:text-lg uppercase">
          Lorem, ipsum dolor.
        </h3>
        <div className="flex flex-row justify-between items-center">
          <h1 className="capitalize font-bold text-xl md:text-3xl">
            Lorem ipsum dolor sit amet
          </h1>
          <div className="hidden md:flex flex-row gap-1">
            <Link href={"/places"} className="text-primary-blue">
              See all
            </Link>
            <ChevronRight className="text-primary-blue" />
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {vacations.map((vacation) => {
          return (
            <div
              className="space-y-3 hover:translate-y-[-5px] hover:animate-pulse"
              key={vacation.id}
            >
              <Image
                className="w-64 object-cover rounded-lg"
                alt={vacation.title}
                src={vacation.image}
                width={1200}
                height={1200}
              />
              <div>
                <h1 className="font-bold text-md Md:text-lg truncate">
                  {vacation.title}
                </h1>
                <p className="text-sm">{vacation.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vacation;

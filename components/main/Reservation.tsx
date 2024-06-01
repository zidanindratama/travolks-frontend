import { icons } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Reservation {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const reservationsData: Reservation[] = [
  {
    id: 1,
    icon: "Search",
    title: "Discover Your Dream Destination",
    description:
      "Embark on a journey to uncover the destination of your dreams. Our handpicked selection of the world's best vacation spots is waiting for you.",
  },
  {
    id: 2,
    icon: "Pen",
    title: "Effortless Booking Experience",
    description:
      "Seamlessly book your adventure with our easy-to-use form. A few clicks and you're all set for an incredible experience.",
  },
  {
    id: 3,
    icon: "PlaneTakeoff",
    title: "Embrace the Adventure",
    description:
      "Prepare yourself for an unforgettable escapade. Pack your bags and relish every moment of your well-deserved getaway.",
  },
];

const Reservation = () => {
  return (
    <div className="my-8 md:my-0">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-x-12">
        <div className="flex flex-col">
          <div className="space-y-2">
            <h3 className="text-primary-blue font-semibold text-sm md:text-lg uppercase">
              Explore New Destinations
            </h3>
            <div className="flex flex-row justify-between items-center">
              <h1 className="capitalize font-bold text-xl md:text-3xl">
                Book Your Next Adventure
              </h1>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            {reservationsData.map((reservation) => {
              // @ts-ignore
              const LucideIcon = icons[reservation.icon];
              return (
                <div
                  className="flex flex-row items-center gap-4"
                  key={reservation.id}
                >
                  <div className="p-2 bg-primary-blue-light/20 w-fit h-fit rounded-md drop-shadow-md">
                    <LucideIcon className="w-6 h-6 font-bold text-primary-blue" />
                  </div>
                  <div>
                    <h1 className="font-semibold text-md md:text-lg">
                      {reservation.title}
                    </h1>
                    <p className="md:w-9/12 text-sm md:text-base">
                      {reservation.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Image
          alt="reservation-image"
          src={"/images/reservation.png"}
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default Reservation;

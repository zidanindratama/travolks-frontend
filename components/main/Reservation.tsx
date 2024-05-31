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
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, atque.",
  },
  {
    id: 2,
    icon: "Pen",
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, atque.",
  },
  {
    id: 3,
    icon: "Laugh",
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, atque.",
  },
];

const Reservation = () => {
  return (
    <div className="my-8 md:my-0">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-x-12">
        <div className="flex flex-col">
          <div className="space-y-2">
            <h3 className="text-primary-blue font-semibold text-lg uppercase">
              Lorem, ipsum dolor.
            </h3>
            <div className="flex flex-row justify-between items-center">
              <h1 className="capitalize font-bold text-3xl">
                Lorem ipsum dolor sit amet
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
                  <div className="p-2 bg-yellow-400/30 w-fit h-fit rounded-md drop-shadow-md">
                    <LucideIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h1 className="font-semibold text-lg">
                      Lorem ipsum dolor sit amet consectetur.
                    </h1>
                    <p className="md:w-9/12 text-md">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus, atque.
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

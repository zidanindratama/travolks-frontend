import { icons } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Destination {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const destinationsData: Destination[] = [
  {
    id: 1,
    icon: "MapPin",
    title: "Lorem ipsum.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, atque.",
  },
  {
    id: 2,
    icon: "Heart",
    title: "Lorem ipsum.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, atque.",
  },
  {
    id: 3,
    icon: "Users",
    title: "Lorem ipsum.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, atque.",
  },
];

const FindDestination = () => {
  return (
    <div className="my-8 md:my-0">
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
      <Image
        src={"/images/map.png"}
        alt="map"
        width={1200}
        height={1200}
        className="w-full rounded-sm my-6"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {destinationsData.map((desctination) => {
          // @ts-ignore
          const LucideIcon = icons[desctination.icon];
          return (
            <div
              className="flex flex-row items-center gap-4"
              key={desctination.id}
            >
              <div className="p-2 bg-gray-400/30 w-fit h-fit rounded-full drop-shadow-md">
                <LucideIcon className="w-6 h-6" />
              </div>
              <div>
                <h1 className="font-semibold text-sm md:text-lg">
                  {desctination.title}
                </h1>
                <p className="md:w-9/12 text-xs md:text-md">
                  {desctination.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FindDestination;

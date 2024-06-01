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
    title: "Explore Exotic Beaches",
    description:
      "Unwind on pristine beaches with crystal-clear waters and golden sands.",
  },
  {
    id: 2,
    icon: "Heart",
    title: "Experience Romantic Getaways",
    description:
      "Rekindle your love amidst stunning landscapes and breathtaking views.",
  },
  {
    id: 3,
    icon: "Users",
    title: "Embark on Group Adventures",
    description:
      "Join like-minded travelers and explore fascinating destinations together.",
  },
];

const FindDestination = () => {
  return (
    <div className="my-8 md:mt-24">
      <div className="space-y-2 flex flex-col m-auto justify-center items-center">
        <h3 className="text-primary-blue font-semibold text-sm md:text-lg uppercase">
          Discover Your Next Adventure
        </h3>
        <h1 className="capitalize font-bold text-xl md:text-3xl">
          Explore Exciting Destinations
        </h1>
        <p className="text-center text-sm md:text-base md:w-9/12">
          Ready for an unforgettable journey? Explore our curated selection of
          breathtaking destinations. From serene beaches to majestic mountains,
          there&apos;s a perfect adventure waiting just for you!
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
              <div className="p-2 bg-primary-blue-light/20 w-fit h-fit rounded-full drop-shadow-md">
                <LucideIcon className="w-6 h-6 text-primary-blue" />
              </div>
              <div>
                <h1 className="font-semibold text-md md:text-lg">
                  {desctination.title}
                </h1>
                <p className="md:w-9/12 text-sm md:text-base">
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

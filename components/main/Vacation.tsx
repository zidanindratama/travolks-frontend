"use client";

import { useFetchData } from "@/hooks/useFetchData";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Place } from "../dashboard/places/PlaceColumn";
import { Badge } from "../ui/badge";
import { Skeleton } from "../ui/skeleton";

interface VacationInt {
  id: number;
  image: string;
  title: string;
  description: string;
}

const vacations: VacationInt[] = [
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
  const {
    data: placesData,
    isLoading,
    isSuccess,
    refetch,
    isRefetching,
  } = useFetchData({
    queryKey: ["placesData"],
    dataProtected: `places`,
  });

  return (
    <div className="my-16 md:mt-0">
      <div className="space-y-2">
        <h3 className="text-primary-blue font-semibold text-sm md:text-lg uppercase">
          Top Vacation Spots
        </h3>
        <div className="flex flex-row justify-between items-center">
          <h1 className="capitalize font-bold text-xl md:text-3xl">
            Discover Your Perfect Getaway
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
        {isLoading &&
          vacations.map((vacation: VacationInt) => {
            return (
              <div
                className="space-y-3 hover:translate-y-[-5px] hover:animate-pulse"
                key={vacation.id}
              >
                <Skeleton className="w-64 h-48 object-cover rounded-lg" />
                <div>
                  <Skeleton className="w-18 h-4" />
                  <Skeleton className="w-8 h-4 mt-1" />
                </div>
              </div>
            );
          })}
        {isSuccess &&
          placesData?.data.places.map((vacation: Place) => {
            return (
              <Link
                href={`/place/${vacation.slug}`}
                className="space-y-3 hover:translate-y-[-5px] hover:animate-pulse"
                key={vacation.id}
              >
                <Image
                  className="w-64 h-48 object-cover rounded-lg"
                  placeholder="blur"
                  blurDataURL="/images/blur.jpg"
                  alt={vacation.name}
                  src={vacation.images[0]}
                  width={1200}
                  height={1200}
                />
                <div>
                  <h1 className="font-bold text-md Md:text-lg truncate">
                    {vacation.name}
                  </h1>
                  <Badge variant={"blue"}>{vacation.categories[0].name}</Badge>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Vacation;

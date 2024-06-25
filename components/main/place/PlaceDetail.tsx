"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useFetchData } from "@/hooks/useFetchData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";

const PlaceDetail = ({ slug }: any) => {
  const {
    data: placeDetailData,
    isLoading,
    isSuccess,
    refetch,
    isRefetching,
  } = useFetchData({
    queryKey: ["placeDetailData"],
    dataProtected: `places/${slug}`,
  });

  const place = placeDetailData?.data;
  console.log(place);

  return (
    <div>
      {isSuccess && (
        <>
          <div className="relative">
            <Image
              src={place?.images[0]}
              className="w-full h-24 md:h-64 object-cover rounded-md"
              width={500}
              height={500}
              alt={place?.name}
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-xl md:text-3xl font-semibold drop-shadow-md uppercase">
                {place?.name}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="col-span-1 md:col-span-2">
              <div
                className="ck-content"
                dangerouslySetInnerHTML={{ __html: place?.description }}
              />
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-bold text-lg">Categories</h3>
                <div className="flex flex-wrap gap-4 mt-2">
                  {place?.categories.map((category: any, index: any) =>
                    index % 2 === 0 ? (
                      <Badge
                        variant="blue"
                        key={category.name}
                        className="w-fit truncate h-fit"
                      >
                        {category.name}
                      </Badge>
                    ) : (
                      <Badge
                        variant="secondary"
                        key={category.name}
                        className="w-fit truncate h-fit"
                      >
                        {category.name}
                      </Badge>
                    )
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">Address</h3>
                <h1 className="text-justify">{place?.address}</h1>
              </div>
              <div>
                <h3 className="font-bold text-lg">Photos</h3>
                <div className="px-10 mt-4">
                  <Carousel
                    opts={{
                      loop: true,
                    }}
                  >
                    <CarouselContent>
                      {place?.images.map((image: any) => {
                        return (
                          <CarouselItem key={image}>
                            <Image
                              alt={image}
                              src={image}
                              width={500}
                              height={500}
                              className="w-full h-32 md:h-48 object-cover rounded-md"
                            />
                          </CarouselItem>
                        );
                      })}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          <iframe
            title="Google Map"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31612.36012390921!2d${place?.longitude}!3d${place?.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd637aaab794a41%3A0xada40d36ecd2a5dd!2sGn.%20Bromo!5e0!3m2!1sid!2sid!4v1719277975998!5m2!1sid!2sid`}
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-96 mt-8 rounded-md"
          ></iframe>
        </>
      )}
      {isLoading && (
        <>
          <div>
            <Skeleton className="w-full h-24 md:h-64 rounded-md" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="col-span-1 md:col-span-2">
                <Skeleton className="w-32 h-4" />
                <Skeleton className="w-full h-48 mt-5" />
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <Skeleton className="w-32 h-4" />
                  <div className="flex flex-row gap-6">
                    <Skeleton className="w-24 h-6" />
                    <Skeleton className="w-24 h-6" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Skeleton className="w-32 h-4" />
                  <Skeleton className="w-48 h-6" />
                </div>
                <div className="flex flex-col gap-3">
                  <Skeleton className="w-32 h-4" />
                  <Skeleton className="w-full h-24" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PlaceDetail;

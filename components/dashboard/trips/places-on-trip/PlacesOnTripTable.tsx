"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFetchData } from "@/hooks/useFetchData";
import { Skeleton } from "@/components/ui/skeleton";
import PlacesOnTripFormDelete from "./PlacesOnTripFormDelete";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Link from "next/link";
import PlacesOnTripFormCreate from "./PlacesOnTripFormCreate";

const PlacesOnTripTable = ({ slug }: any) => {
  const { data: tripData, isSuccess: isSuccessTripData } = useFetchData({
    queryKey: ["tripData"],
    dataProtected: `trips/${slug}`,
  });

  const {
    data: placesOnTripData,
    isSuccess: isSuccessPlacesOnTrip,
    isLoading,
  } = useFetchData({
    queryKey: ["placesOnTripData"],
    dataProtected: `places-on-trip/${tripData?.data.trip.id}`,
  });

  console.log(placesOnTripData?.data.placesOnTrip.length);

  return (
    <div className="mt-12">
      <Card>
        <CardHeader>
          <CardTitle>Places On Trip</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            autem.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell>
                    <Skeleton className="w-12 h-4" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-8 h-4" />
                  </TableCell>
                </TableRow>
              ) : isSuccessPlacesOnTrip &&
                placesOnTripData?.data.placesOnTrip.length > 0 ? (
                placesOnTripData?.data.placesOnTrip[0].placesOnTrip.map(
                  (place: any) => {
                    return (
                      <TableRow key={place.placesOnTripId}>
                        <TableCell>{place.placeName}</TableCell>
                        <TableCell className="flex flex-row items-center gap-6">
                          <Button variant={"primaryBlue"} size={"icon"}>
                            <Link href={`/place/${place.placeSlug}`}>
                              <Eye className="w-4 h-4" />
                            </Link>
                          </Button>
                          <PlacesOnTripFormDelete
                            slug={slug}
                            placeOnTripId={place.placesOnTripId}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  }
                )
              ) : (
                <TableRow>
                  <TableCell>No results.</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <PlacesOnTripFormCreate slug={slug} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default PlacesOnTripTable;

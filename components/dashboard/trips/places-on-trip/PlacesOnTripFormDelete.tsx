"use client";

import { Button } from "@/components/ui/button";
import { useDeleteData } from "@/hooks/useDeleteData";
import { Trash } from "lucide-react";
import React from "react";

const PlacesOnTripFormDelete = ({ slug, placeOnTripId }: any) => {
  const mutationDeletePlaceOnTrip = useDeleteData({
    queryKey: "placesOnTripData",
    dataProtected: `places-on-trip/${placeOnTripId}`,
    backUrl: `/dashboard/trips/${slug}`,
  });

  const handleDelete = (e: any) => {
    e.preventDefault();
    mutationDeletePlaceOnTrip.mutate();
  };

  return (
    <div>
      <Button variant={"destructive"} size={"icon"} onClick={handleDelete}>
        <Trash className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default PlacesOnTripFormDelete;

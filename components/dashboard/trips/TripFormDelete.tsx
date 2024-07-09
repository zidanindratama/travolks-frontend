"use client";

import { Button } from "@/components/ui/button";
import { useDeleteData } from "@/hooks/useDeleteData";
import { Trash } from "lucide-react";
import React from "react";

const TripFormDelete = ({ slug }: any) => {
  const mutationDeleteTrip = useDeleteData({
    queryKey: "tripsData",
    dataProtected: `trips/${slug}`,
    backUrl: "/dashboard/trips",
  });

  const handleDelete = (e: any) => {
    e.preventDefault();
    mutationDeleteTrip.mutate();
  };

  return (
    <div className="flex flex-row justify-end mb-6">
      <Button
        variant={"destructive"}
        className="flex flex-row gap-2"
        onClick={handleDelete}
      >
        <Trash className="w-4 h-4" />
        Delete Trip
      </Button>
    </div>
  );
};

export default TripFormDelete;

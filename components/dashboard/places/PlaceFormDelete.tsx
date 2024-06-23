"use client";

import { Button } from "@/components/ui/button";
import { useDeleteData } from "@/hooks/useDeleteData";
import { Trash } from "lucide-react";
import React from "react";

const PlaceFormDelete = ({ slug }: any) => {
  const mutationDeletePlace = useDeleteData({
    queryKey: "placesData",
    dataProtected: `places/${slug}`,
    backUrl: "/dashboard/places",
  });

  const handleDelete = (e: any) => {
    e.preventDefault();
    mutationDeletePlace.mutate();
  };

  return (
    <div className="flex flex-row justify-end mt-6">
      <Button
        variant={"destructive"}
        className="flex flex-row gap-2"
        onClick={handleDelete}
      >
        <Trash className="w-4 h-4" />
        Delete Place
      </Button>
    </div>
  );
};

export default PlaceFormDelete;

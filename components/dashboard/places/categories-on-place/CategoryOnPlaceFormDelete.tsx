"use client";

import { Button } from "@/components/ui/button";
import { useDeleteData } from "@/hooks/useDeleteData";
import { Trash } from "lucide-react";
import React from "react";

const CategoryOnPlaceFormDelete = ({ placeId, COPID }: any) => {
  const mutationDeleteCategory = useDeleteData({
    queryKey: "categoriesOnPlaceData",
    dataProtected: `categories-on-place/${COPID}`,
    backUrl: `/dashboard/places/${placeId}`,
  });

  const handleDelete = (e: any) => {
    e.preventDefault();
    mutationDeleteCategory.mutate();
  };

  return (
    <div className="">
      <Button variant={"destructive"} size={"icon"} onClick={handleDelete}>
        <Trash className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default CategoryOnPlaceFormDelete;

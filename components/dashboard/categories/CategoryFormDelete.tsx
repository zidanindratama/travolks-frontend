"use client";

import { Button } from "@/components/ui/button";
import { useDeleteData } from "@/hooks/useDeleteData";
import { Trash } from "lucide-react";
import React from "react";

const CategoryFormDelete = ({ slug }: any) => {
  const mutationDeleteCategory = useDeleteData({
    queryKey: "categoriesData",
    dataProtected: `categories/${slug}`,
    backUrl: "/dashboard/categories",
  });

  const handleDelete = (e: any) => {
    e.preventDefault();
    mutationDeleteCategory.mutate();
  };

  return (
    <div className="flex flex-row justify-end mt-6">
      <Button
        variant={"destructive"}
        className="flex flex-row gap-2"
        onClick={handleDelete}
      >
        <Trash className="w-4 h-4" />
        Delete Category
      </Button>
    </div>
  );
};

export default CategoryFormDelete;

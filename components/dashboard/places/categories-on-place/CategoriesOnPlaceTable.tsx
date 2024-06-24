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
import { useFetchData } from "@/hooks/useFetchData";
import { Skeleton } from "@/components/ui/skeleton";
import CategoryOnPlaceFormDelete from "./CategoryOnPlaceFormDelete";

const CategoriesOnPlaceTable = ({ slug }: any) => {
  const { data: placeDetailData, isSuccess: isSuccessPlaceDetailData } =
    useFetchData({
      queryKey: ["placeDetailData"],
      dataProtected: `places/${slug}`,
    });

  const {
    data: categoriesOnPlaceData,
    isSuccess: isSuccessCategoriesOnPlaceData,
    isLoading,
  } = useFetchData({
    queryKey: ["categoriesOnPlaceData"],
    dataProtected: `categories-on-place/${placeDetailData?.data.id}`,
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Categories</TableHead>
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
        ) : isSuccessCategoriesOnPlaceData &&
          categoriesOnPlaceData?.data.categoriesOnPlace.length > 0 ? (
          categoriesOnPlaceData?.data.categoriesOnPlace.map(
            (categoryOnPlace: any) => {
              console.log(categoryOnPlace);

              return categoryOnPlace.categoriesOnPlace.map((COP: any) => {
                return (
                  <TableRow key={COP.categoryOnPlaceId}>
                    <TableCell>{COP.categoryName}</TableCell>
                    <TableCell>
                      <CategoryOnPlaceFormDelete
                        slug={slug}
                        COPID={COP.categoryOnPlaceId}
                      />
                    </TableCell>
                  </TableRow>
                );
              });
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
  );
};

export default CategoriesOnPlaceTable;

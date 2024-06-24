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
import Image from "next/image";
import ImageOnPlaceFormDelete from "./ImageOnPlaceFormDelete";

const ImagesOnPlaceTable = ({ slug }: any) => {
  const { data: placeDetailData, isSuccess: isSuccessPlaceDetailData } =
    useFetchData({
      queryKey: ["placeDetailData"],
      dataProtected: `places/${slug}`,
    });

  const {
    data: imagesOnPlaceData,
    isSuccess: isSuccessimagesOnPlaceData,
    isLoading,
  } = useFetchData({
    queryKey: ["imagesOnPlaceData"],
    dataProtected: `images-on-place/${placeDetailData?.data.id}`,
  });

  const test = imagesOnPlaceData?.data.map((IOP: any) => {
    return IOP.images.map((image: any) => {
      return image.imageUrl;
    });
  });
  console.log(imagesOnPlaceData?.data.length);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Images</TableHead>
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
        ) : isSuccessimagesOnPlaceData && imagesOnPlaceData?.data.length < 1 ? (
          <TableRow>
            <TableCell>No results.</TableCell>
            <TableCell></TableCell>
          </TableRow>
        ) : (
          isSuccessPlaceDetailData &&
          imagesOnPlaceData?.data.length > 0 &&
          imagesOnPlaceData?.data.map((IOP: any) => {
            return IOP.images.map((image: any) => {
              return (
                <TableRow key={image.url}>
                  <TableCell>
                    <Image
                      placeholder="blur"
                      blurDataURL="/images/blur.jpg"
                      alt={image.url}
                      src={image.imageUrl}
                      width={500}
                      height={500}
                      className="w-20 h-16 object-cover"
                    />
                  </TableCell>
                  <TableCell>
                    <ImageOnPlaceFormDelete
                      slug={slug}
                      imageId={image.imageId}
                    />
                  </TableCell>
                </TableRow>
              );
            });
          })
        )}
      </TableBody>
    </Table>
  );
};

export default ImagesOnPlaceTable;

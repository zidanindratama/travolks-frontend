"use client";

import React from "react";
import { DataTable } from "@/components/DataTable";
import { useFetchData } from "@/hooks/useFetchData";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "next/navigation";
import { placeColumn } from "./PlaceColumn";

const PlacesDataTable = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const count = searchParams.get("count") || "10";
  const limit = typeof count === "string" ? parseInt(count) : 10;

  const { data, isLoading, isSuccess, refetch, isRefetching } = useFetchData({
    queryKey: ["placesData", page],
    dataProtected: `places?pgSize=${count}&pgNum=${page}`,
  });

  const pageCount = Math.ceil(data?.data.meta.count / limit);

  return (
    <div className="mt-10">
      {(isLoading || isRefetching) && <Skeleton className="w-full h-96" />}
      {isSuccess && !isRefetching && (
        <>
          <DataTable
            propsData={data?.data.places}
            columnsData={placeColumn}
            pageCount={pageCount}
          />
        </>
      )}
    </div>
  );
};

export default PlacesDataTable;

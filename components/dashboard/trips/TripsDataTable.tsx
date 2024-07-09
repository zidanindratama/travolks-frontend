"use client";

import { DataTable } from "@/components/DataTable";
import { useFetchData } from "@/hooks/useFetchData";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "next/navigation";
import React from "react";
import { tripColumn } from "./TripColumn";

const TripsDataTable = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const count = searchParams.get("count") || "10";
  const limit = typeof count === "string" ? parseInt(count) : 10;

  const { data, isLoading, isSuccess, refetch, isRefetching } = useFetchData({
    queryKey: ["tripsData", page],
    dataProtected: `trips?pgSize=${count}&pgNum=${page}`,
  });

  const pageCount = Math.ceil(data?.data.meta.count / limit);

  return (
    <div className="mt-10">
      {(isLoading || isRefetching) && <Skeleton className="w-full h-96" />}
      {isSuccess && !isRefetching && (
        <>
          <DataTable
            propsData={data?.data.trips}
            columnsData={tripColumn}
            pageCount={pageCount}
          />
        </>
      )}
    </div>
  );
};

export default TripsDataTable;

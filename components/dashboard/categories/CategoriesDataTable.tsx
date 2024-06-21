"use client";

import { DataTable } from "@/components/DataTable";
import { useFetchData } from "@/hooks/useFetchData";
import { Skeleton } from "@/components/ui/skeleton";
import { categoryColumn } from "./CategoryColumn";
import { useSearchParams } from "next/navigation";
import React from "react";

const CategoriesDataTable = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const count = searchParams.get("count") || "15";
  const limit = typeof count === "string" ? parseInt(count) : 15;

  const { data, isLoading, isSuccess, refetch, isRefetching } = useFetchData({
    queryKey: ["categoriesData", page],
    dataProtected: `categories?count=${count}&page=${page}`,
  });

  const pageCount = Math.ceil(data?.data.meta.count / limit);

  return (
    <div className="mt-10">
      {(isLoading || isRefetching) && <Skeleton className="w-full h-96" />}
      {isSuccess && !isRefetching && (
        <>
          <DataTable
            propsData={data?.data.categories}
            columnsData={categoryColumn}
            pageCount={pageCount}
          />
        </>
      )}
    </div>
  );
};

export default CategoriesDataTable;

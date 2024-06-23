import React, { Suspense } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import PlacesDataTable from "@/components/dashboard/places/PlacesDataTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Places</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex justify-end">
        <Button variant={"primaryBlue"} asChild>
          <Link href={"/dashboard/places/create"}>Create</Link>
        </Button>
      </div>
      <Suspense>
        <PlacesDataTable />
      </Suspense>
    </div>
  );
};

export default page;

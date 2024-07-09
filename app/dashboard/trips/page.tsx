import React, { Suspense } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TripsDataTable from "@/components/dashboard/trips/TripsDataTable";

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
            <BreadcrumbPage>Trips</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex justify-end">
        <Button variant={"primaryBlue"} asChild>
          <Link href={"/dashboard/trips/create"}>Create</Link>
        </Button>
      </div>
      <Suspense>
        <TripsDataTable />
      </Suspense>
    </div>
  );
};

export default page;

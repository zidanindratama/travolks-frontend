import React, { Suspense } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CategoriesDataTable from "@/components/dashboard/categories/CategoriesDataTable";
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
            <BreadcrumbPage>Categories</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex justify-end">
        <Button variant={"primaryBlue"} asChild>
          <Link href={"/dashboard/categories/create"}>Create</Link>
        </Button>
      </div>
      <Suspense>
        <CategoriesDataTable />
      </Suspense>
    </div>
  );
};

export default page;

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import PlaceFormUpdate from "@/components/dashboard/places/PlaceFormUpdate";
import PlaceFormDelete from "@/components/dashboard/places/PlaceFormDelete";

const page = ({ params }: any) => {
  return (
    <div>
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/places">Places</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Detail</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PlaceFormDelete slug={params.slug} />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <PlaceFormUpdate slug={params.slug} />
      </div>
    </div>
  );
};

export default page;

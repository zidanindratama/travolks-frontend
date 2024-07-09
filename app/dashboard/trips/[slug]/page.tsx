import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import TripFormUpdate from "@/components/dashboard/trips/TripFormUpdate";
import TripFormDelete from "@/components/dashboard/trips/TripFormDelete";
import PlacesOnTripTable from "@/components/dashboard/trips/places-on-trip/PlacesOnTripTable";

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
            <BreadcrumbLink href="/dashboard/trips">Trips</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Detail</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <TripFormDelete slug={params.slug} />
      <TripFormUpdate slug={params.slug} />
      <PlacesOnTripTable slug={params.slug} />
    </div>
  );
};

export default page;

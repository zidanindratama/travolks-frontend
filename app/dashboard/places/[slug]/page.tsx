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
import CategoriesOnPlace from "@/components/dashboard/places/categories-on-place/CategoriesOnPlace";
import ImagesOnPlace from "@/components/dashboard/places/images-on-place/ImagesOnPlace";

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
        <div className="flex flex-col gap-8">
          <CategoriesOnPlace slug={params.slug} />
          <ImagesOnPlace slug={params.slug} />
        </div>
      </div>
    </div>
  );
};

export default page;

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import UserFormUpdate from "@/components/dashboard/users/UserFormUpdate";
import ProfileFormUpdate from "@/components/dashboard/users/ProfileFormUpdate";
import UserFormDelete from "@/components/dashboard/users/UserFormDelete";

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
            <BreadcrumbLink href="/dashboard/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Detail</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <UserFormDelete id={params.id} />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProfileFormUpdate id={params.id} />
        <UserFormUpdate id={params.id} />
      </div>
    </div>
  );
};

export default page;

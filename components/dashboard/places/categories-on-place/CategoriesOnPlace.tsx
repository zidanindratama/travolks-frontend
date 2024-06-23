import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CategoriesOnPlaceTable from "./CategoriesOnPlaceTable";
import CategoriesOnPlaceFormCreate from "./CategoriesOnPlaceFormCreate";

const CategoriesOnPlace = ({ slug }: any) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Categories On Place</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            distinctio.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CategoriesOnPlaceTable slug={slug} />
        </CardContent>
        <CardFooter>
          <CategoriesOnPlaceFormCreate slug={slug} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default CategoriesOnPlace;

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ImagesOnPlaceTable from "./ImagesOnPlaceTable";
import ImageOnPlaceFormCreate from "./ImageOnPlaceFormCreate";

const ImagesOnPlace = ({ slug }: any) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Images On Place</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            distinctio.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ImagesOnPlaceTable slug={slug} />
        </CardContent>
        <CardFooter>
          <ImageOnPlaceFormCreate slug={slug} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default ImagesOnPlace;

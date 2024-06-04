import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
            <CardHeader className="pb-3">
              <CardTitle className="text-custom-Fly-byNight">
                Your Orders
              </CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed text-custom-Strong-Iris">
                Introducing Our Dynamic Orders Dashboard for Seamless Management
                and Insightful Analysis.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="bg-custom-Lightish-Blue hover:bg-custom-Fennel-Flower">
                Create New Order
              </Button>
            </CardFooter>
          </Card>
          <Card x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2">
              <CardDescription className="text-custom-Strong-Iris">
                This Week
              </CardDescription>
              <CardTitle className="text-4xl text-custom-Fly-byNight">
                $1,329
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground text-custom-Strong-Iris">
                +25% from last week
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={25} aria-label="25% increase" />
            </CardFooter>
          </Card>
          <Card x-chunk="dashboard-05-chunk-2">
            <CardHeader className="pb-2">
              <CardDescription className="text-custom-Strong-Iris">
                This Month
              </CardDescription>
              <CardTitle className="text-4xl text-custom-Fly-byNight">
                $5,329
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground text-custom-Strong-Iris">
                +10% from last month
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={12} aria-label="12% increase" />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;

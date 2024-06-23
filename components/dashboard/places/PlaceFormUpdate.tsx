"use client";

import { useAddData } from "@/hooks/useAddData";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useFetchData } from "@/hooks/useFetchData";
import { useUpdateData } from "@/hooks/useUpdateData";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const MapWithNoSSR = dynamic(() => import("./MapComponent"), {
  ssr: false,
});

const formSchema = z.object({
  name: z
    .string()
    .min(5, "Name must be at least 5 characters long")
    .max(50, "Name must be at most 50 characters long"),
  address: z
    .string()
    .min(5, "Address must be at least 5 characters long")
    .max(100, "Address must be at most 50 characters long"),
  description: z.string(),
});

const PlaceFormUpdate = ({ slug }: any) => {
  const { data: placeDetailData, isSuccess } = useFetchData({
    queryKey: ["placeDetailData"],
    dataProtected: `places/${slug}`,
  });

  const preLoadValues = {
    name: placeDetailData?.data.name,
    address: placeDetailData?.data.address,
    description: placeDetailData?.data.description,
  };

  const [position, setPosition] = useState<[number, number]>([
    -6.2088 || parseFloat(placeDetailData?.data.latitude),
    106.8456 || parseFloat(placeDetailData?.data.longitude),
  ]);

  useEffect(() => {
    if (
      isSuccess &&
      placeDetailData?.data?.latitude &&
      placeDetailData?.data?.longitude
    ) {
      setPosition([
        parseFloat(placeDetailData.data.latitude),
        parseFloat(placeDetailData.data.longitude),
      ]);
    }
  }, [isSuccess, placeDetailData]);

  const handleClick = (e: any) => {
    setPosition([e.latlng.lat, e.latlng.lng]);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: preLoadValues || [],
  });

  const mutationUpdatePlace = useUpdateData({
    queryKey: "placeData",
    dataProtected: `places/${slug}`,
    backUrl: "/dashboard/places",
  });

  const onSubmit = async (data: FieldValues) => {
    mutationUpdatePlace.mutate({
      ...data,
      latitude: position[0].toString(),
      longitude: position[1].toString(),
    });
  };

  return (
    <div className="md:col-span-3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle>Place Data</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      {/* @ts-ignore */}
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      {/* @ts-ignore */}
                      <Textarea
                        placeholder="Tell us a little bit about this place"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      {/* @ts-ignore */}
                      <Textarea
                        placeholder="Tell us a little bit about this place"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <FormLabel>Position</FormLabel>
                <MapWithNoSSR position={position} handleClick={handleClick} />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant={"primaryBlue"}>Save Changes</Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default PlaceFormUpdate;

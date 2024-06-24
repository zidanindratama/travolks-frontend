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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const MapWithNoSSR = dynamic(() => import("./MapComponent"), {
  ssr: false,
});

const Editor = dynamic(() => import("./../../Editor"), {
  ssr: false,
});

const formSchema = z.object({
  name: z
    .string()
    .min(5, "Name must be at least 5 characters long")
    .max(250, "Name must be at most 250 characters long"),
  address: z
    .string()
    .min(5, "Address must be at least 5 characters long")
    .max(250, "Address must be at most 250 characters long"),
});

const PlaceFormCreate = () => {
  const [textEditor, setTextEditor] = useState("");

  const [position, setPosition] = useState<[number, number]>([
    -6.2088, 106.8456,
  ]);

  const handleClick = (e: any) => {
    setPosition([e.latlng.lat, e.latlng.lng]);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const mutationAddPlace = useAddData({
    queryKey: "placeData",
    dataProtected: `places`,
    backUrl: "/dashboard/places",
  });

  const onSubmit = async (data: FieldValues) => {
    mutationAddPlace.mutate({
      ...data,
      description: textEditor,
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
              <div className="space-y-2">
                <FormLabel>Description</FormLabel>
                <Editor setTextEditor={setTextEditor} />
              </div>
              <div className="mt-4">
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

export default PlaceFormCreate;

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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFetchData } from "@/hooks/useFetchData";
import { FieldValues, useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { z } from "zod";
import React, { useState } from "react";
import dynamic from "next/dynamic";
// @ts-ignore
import { format } from "date-fns";

const Editor = dynamic(() => import("./../../Editor"), {
  ssr: false,
});

const formSchema = z.object({
  tourGuideId: z.string(),
  name: z.string(),
  price: z.string(),
  startRegister: z.date(),
  endRegister: z.date(),
  startTrip: z.date(),
  endTrip: z.date(),
  image: z.any().optional(),
});

const TripFormCreate = () => {
  const [textEditor, setTextEditor] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const imageRef = form.register("image");

  const {
    data: usersData,
    isLoading,
    isSuccess,
    refetch,
    isRefetching,
  } = useFetchData({
    queryKey: ["usersData"],
    dataProtected: `users?role=TOUR_GUIDE`,
  });

  const mutationCreateTrip = useAddData({
    queryKey: "tripsData",
    dataProtected: `trips`,
    backUrl: "/dashboard/trips",
  });

  const onSubmit = (data: FieldValues) => {
    const form = new FormData();

    const appendIfNotNull = (key: string, value: any) => {
      if (value != null) {
        form.append(key, value);
      }
    };

    appendIfNotNull("tourGuideId", data.tourGuideId);
    appendIfNotNull("name", data.name);
    appendIfNotNull("description", textEditor);
    appendIfNotNull("price", data.price);
    appendIfNotNull(
      "startRegister",
      new Date(data.startRegister).toISOString()
    );
    appendIfNotNull("endRegister", new Date(data.endRegister).toISOString());
    appendIfNotNull("startTrip", new Date(data.startTrip).toISOString());
    appendIfNotNull("endTrip", new Date(data.endTrip).toISOString());

    if (data.image[0] !== undefined) {
      form.append("image", data.image[0]);
    }

    mutationCreateTrip.mutate(form);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-row justify-end w-full mb-6">
            <Button variant={"primaryBlue"}>Save Changes</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="h-fit md:col-span-2">
              <CardHeader>
                <CardTitle>Trip Data</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
                  omnis.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="299.99" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tourGuideId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tour Guide</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a verified tour guide to display" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {usersData?.data.user.map((tourGuide: any) => {
                            return (
                              <SelectItem
                                value={tourGuide.profile.userId}
                                key={tourGuide.id}
                              >
                                {tourGuide.profile.fullname}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <Input type="file" placeholder="Image" {...imageRef} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="space-y-2 min-w-[18rem]">
                  <FormLabel>Description</FormLabel>
                  <Editor data={textEditor} setTextEditor={setTextEditor} />
                </div>
              </CardContent>
            </Card>
            <div className="flex flex-col gap-8">
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle>Registration Period</CardTitle>
                  <CardDescription>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores, nam!
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <FormField
                    control={form.control}
                    name="startRegister"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Start Register</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="endRegister"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>End Register</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle>Trip Period</CardTitle>
                  <CardDescription>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores, nam!
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <FormField
                    control={form.control}
                    name="startTrip"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Start Trip</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="endTrip"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>End Trip</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default TripFormCreate;

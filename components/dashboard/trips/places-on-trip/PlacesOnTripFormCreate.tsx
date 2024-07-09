"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFetchData } from "@/hooks/useFetchData";
import { Category } from "../../categories/CategoryColumn";
import { useAddData } from "@/hooks/useAddData";
import { Place } from "../../places/PlaceColumn";

const formSchema = z.object({
  placeId: z.string(),
});

const PlacesOnTripFormCreate = ({ slug }: any) => {
  const { data: tripData, isSuccess: isSuccessTripData } = useFetchData({
    queryKey: ["tripData"],
    dataProtected: `trips/${slug}`,
  });

  const {
    data: placesData,
    isLoading,
    isSuccess: isSuccessPlacesData,
  } = useFetchData({
    queryKey: ["placesData"],
    dataProtected: `places`,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const mutationCreatePlaceOnTrip = useAddData({
    queryKey: "placesOnTripData",
    dataProtected: `places-on-trip`,
    backUrl: `/dashboard/trips/${slug}`,
  });

  const onSubmit = async (data: FieldValues) => {
    mutationCreatePlaceOnTrip.mutate({
      placeId: data.placeId,
      tripId: tripData?.data.trip.id,
    });
  };

  return (
    <div>
      {" "}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"primaryBlue"} size={"sm"}>
            Add Place
          </Button>
        </DialogTrigger>
        <DialogContent className="w-9/12 rounded-md">
          <DialogHeader>
            <DialogTitle className="mb-4">Add Place on Trip</DialogTitle>
            <DialogDescription>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="placeId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Place</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a verified place to display" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {placesData?.data.places.map((place: Place) => {
                              return (
                                <SelectItem value={place.id} key={place.id}>
                                  {place.name}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button variant={"primaryBlue"} size={"sm"} className="mt-5">
                    Add Place
                  </Button>
                </form>
              </Form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PlacesOnTripFormCreate;

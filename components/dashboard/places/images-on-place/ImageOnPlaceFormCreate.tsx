"use client";

import { useAddData } from "@/hooks/useAddData";
import { useFetchData } from "@/hooks/useFetchData";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Button } from "@/components/ui/button";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  image: z.any().optional(),
});

const ImageOnPlaceFormCreate = ({ slug }: any) => {
  const { data: placeDetailData, isSuccess: isSuccessPlaceDetailData } =
    useFetchData({
      queryKey: ["placeDetailData"],
      dataProtected: `places/${slug}`,
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const imageRef = form.register("image");

  const mutationCreateImageOnPlace = useAddData({
    queryKey: "imagesOnPlaceData",
    dataProtected: `images-on-place/${placeDetailData?.data.id}`,
    backUrl: `/dashboard/places/${slug}`,
  });

  const onSubmit = async (data: FieldValues) => {
    const form = new FormData();

    if (data.image[0] !== undefined) {
      form.append("image", data.image[0]);
    }

    mutationCreateImageOnPlace.mutate(form);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"primaryBlue"} size={"sm"}>
          Add Image
        </Button>
      </DialogTrigger>
      <DialogContent className="w-9/12 rounded-md">
        <DialogHeader>
          <DialogTitle className="mb-4">Add Image on Place</DialogTitle>
          <DialogDescription>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
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
                <Button variant={"primaryBlue"} size={"sm"} className="mt-5">
                  Add Image
                </Button>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ImageOnPlaceFormCreate;

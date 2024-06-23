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

const formSchema = z.object({
  categoryId: z.string(),
});

const CategoriesOnPlaceFormCreate = ({ slug }: any) => {
  const { data: placeDetailData, isSuccess: isSuccessPlaceDetailData } =
    useFetchData({
      queryKey: ["placeDetailData"],
      dataProtected: `places/${slug}`,
    });

  const {
    data: categoriesData,
    isLoading,
    isSuccess: isSuccessCategoriesData,
  } = useFetchData({
    queryKey: ["categoriesData"],
    dataProtected: `categories`,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const mutationCreateCategoryOnPlace = useAddData({
    queryKey: "categoriesOnPlaceData",
    dataProtected: `categories-on-place`,
    backUrl: `/dashboard/places/${slug}`,
  });

  const onSubmit = async (data: FieldValues) => {
    mutationCreateCategoryOnPlace.mutate({
      categoryId: data.categoryId,
      placeId: placeDetailData?.data.id,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"primaryBlue"} size={"sm"}>
          Add category
        </Button>
      </DialogTrigger>
      <DialogContent className="w-9/12 rounded-md">
        <DialogHeader>
          <DialogTitle className="mb-4">Add Category on Place</DialogTitle>
          <DialogDescription>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="categoryId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a verified category to display" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {isSuccessCategoriesData &&
                            categoriesData?.data.categories.map(
                              (category: Category) => {
                                return (
                                  <SelectItem
                                    value={category.id}
                                    key={category.id}
                                  >
                                    {category.name}
                                  </SelectItem>
                                );
                              }
                            )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button variant={"primaryBlue"} size={"sm"} className="mt-5">
                  Add category
                </Button>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CategoriesOnPlaceFormCreate;

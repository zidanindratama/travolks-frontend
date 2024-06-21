"use client";

import { useFetchData } from "@/hooks/useFetchData";
import { useUpdateData } from "@/hooks/useUpdateData";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import React from "react";

const formSchema = z.object({
  name: z.string(),
  slug: z.string(),
});

const CategoryFormUpdate = ({ slug }: any) => {
  const { data: categoryData, isLoading } = useFetchData({
    queryKey: ["categoryData"],
    dataProtected: `categories/${slug}`,
  });

  const preLoadValues = {
    name: categoryData?.data.name,
    slug: categoryData?.data.slug,
  };
  console.log(preLoadValues);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: preLoadValues || [],
  });

  const mutationUpdateCategory = useUpdateData({
    queryKey: "categoriesData",
    dataProtected: `categories/${slug}`,
    backUrl: "/dashboard/categories",
  });

  const onSubmit = async (data: FieldValues) => {
    mutationUpdateCategory.mutate(data);
  };

  return (
    <div className="mt-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle>Update Category</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category&apos;s Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category&apos;s Slug</FormLabel>
                    <FormControl>
                      <Input placeholder="Slug" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" variant={"primaryBlue"}>
                Save changes
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default CategoryFormUpdate;

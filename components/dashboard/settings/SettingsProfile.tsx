"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import useRetrieveUserDataFromCookie from "@/hooks/useRetreiveUserDataFromCookie";
import { useFetchData } from "@/hooks/useFetchData";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useUpdateData } from "@/hooks/useUpdateData";

enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

const formSchema = z.object({
  fullname: z
    .string()
    .min(5, "Full name must be at least 5 characters long")
    .max(50, "Full name must be at most 50 characters long")
    .nullish(),
  gender: z.nativeEnum(Gender),
  address: z.string().nullish(),
  phoneNumber: z.string().nullish(),
  image: z.any().optional(),
});

const SettingsProfile = () => {
  const userDataFromCookie = useRetrieveUserDataFromCookie();

  const { data: userProfileData, isSuccess } = useFetchData({
    queryKey: ["userProfileData"],
    dataProtected: `profile/user/${userDataFromCookie?.sub}`,
  });

  const preLoadValues = {
    fullname: userProfileData?.data.fullname,
    gender: userProfileData?.data.gender,
    address: userProfileData?.data.address,
    phoneNumber: userProfileData?.data.phoneNumber,
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: preLoadValues || [],
  });

  const imageRef = form.register("image");

  const mutationUpdateProfile = useUpdateData({
    queryKey: "userProfileData",
    dataProtected: `profile/user/${userDataFromCookie?.sub}`,
  });

  const onSubmit = async (data: FieldValues) => {
    const form = new FormData();

    const appendIfNotNull = (key: string, value: any) => {
      if (value != null) {
        form.append(key, value);
      }
    };

    appendIfNotNull("fullname", data.fullname);
    appendIfNotNull("address", data.address);
    appendIfNotNull("phoneNumber", data.phoneNumber);
    appendIfNotNull("gender", data.gender);

    if (data.image[0] !== undefined) {
      form.append("image", data.image[0]);
    }

    mutationUpdateProfile.mutate(form);
  };

  return (
    <div className="md:col-span-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle>Update Profile</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fullname</FormLabel>
                    <FormControl>
                      {/* @ts-ignore */}
                      <Input placeholder="Fullname" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a verified gender to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="MALE">Male</SelectItem>
                        <SelectItem value="FEMALE">Female</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      {/* @ts-ignore */}
                      <Input placeholder="phoneNumber" {...field} />
                    </FormControl>
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
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      {/* @ts-ignore */}
                      <Textarea
                        placeholder="Tell us a little bit about yourself"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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

export default SettingsProfile;

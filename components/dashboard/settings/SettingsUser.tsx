"use client";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFetchData } from "@/hooks/useFetchData";
import { useUpdateData } from "@/hooks/useUpdateData";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import React from "react";
import useRetrieveUserDataFromCookie from "@/hooks/useRetreiveUserDataFromCookie";

enum Roles {
  ADMINISTRATOR = "ADMINISTRATOR",
  TOUR_GUIDE = "TOUR_GUIDE",
  CUSTOMER = "CUSTOMER",
}

const formSchema = z.object({
  email: z.string().email(),
  role: z.nativeEnum(Roles),
});

const SettingsUser = () => {
  const userDataFromCookie = useRetrieveUserDataFromCookie();

  const { data: userData, isLoading } = useFetchData({
    queryKey: ["userData"],
    dataProtected: `users/${userDataFromCookie?.sub}`,
  });

  const preLoadValues = {
    email: userData?.data.email,
    role: userData?.data.role,
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: preLoadValues || [],
  });

  const mutationUpdateUser = useUpdateData({
    queryKey: "userData",
    dataProtected: `users/${userDataFromCookie?.sub}`,
  });

  const onSubmit = async (data: FieldValues) => {
    mutationUpdateUser.mutate(data);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle>User Type</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="user@travolKs.com"
                        readOnly
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      disabled={
                        userData?.data.role === "ADMINISTRATOR" ? false : true
                      }
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a verified role to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ADMINISTRATOR">
                          Administrator
                        </SelectItem>
                        <SelectItem value="TOUR_GUIDE">Tour Guide</SelectItem>
                        <SelectItem value="CUSTOMER">Customer</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            {userDataFromCookie?.role === Roles.ADMINISTRATOR && (
              <CardFooter>
                <Button type="submit" variant={"primaryBlue"}>
                  Save changes
                </Button>
              </CardFooter>
            )}
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default SettingsUser;

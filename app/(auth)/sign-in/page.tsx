"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axiosInstance from "@/helper/axiosInstance";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(5, "Password must be at least 5 characters"),
});

const SigninPage = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "zidanindratama@travolks.com",
      password: "test123",
    },
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const { email, password } = data;
      const res = await axiosInstance.post("/auth/signin", {
        email,
        password,
      });
      const { access_token, ...restData } = res.data;
      Cookies.set("accessToken", access_token);
      Cookies.set("user", JSON.stringify(restData));

      router.push("/dashboard");
      toast.success("Welcome back to Travolks!");
    } catch (error) {
      // @ts-ignore
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="md:w-4/12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Sign in</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="user@travolks.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="*******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid gap-2">
                <Button
                  type="submit"
                  className="w-full"
                  variant={"primaryBlue"}
                >
                  {form.formState.isSubmitting ? (
                    <p className="flex gap-x-2 items-center">
                      <LoaderCircle className="animate-spin h-4 w-4" />
                      Loading...
                    </p>
                  ) : (
                    "Signin"
                  )}
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={"/coming-soon"}>Login with Google</Link>
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/sign-up" className="underline">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default SigninPage;

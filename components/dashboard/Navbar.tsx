"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axiosInstance from "@/helper/axiosInstance";
import { useFetchData } from "@/hooks/useFetchData";
import { Skeleton } from "@/components/ui/skeleton";
import useRetrieveUserDataFromCookie from "@/hooks/useRetreiveUserDataFromCookie";
import {
  Blocks,
  Home,
  MountainSnow,
  Package2,
  PanelLeft,
  PersonStanding,
  Search,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const userDataFromCookie = useRetrieveUserDataFromCookie();

  const { data: userProfileData, isSuccess } = useFetchData({
    queryKey: ["userProfileData"],
    dataProtected: `profile/user/${userDataFromCookie?.sub}`,
  });

  const { data: userData, isSuccess: isSuccessUser } = useFetchData({
    queryKey: ["userData"],
    dataProtected: `users/${userDataFromCookie?.sub}`,
  });

  const handleLogout = async () => {
    try {
      const res = await axiosInstance.delete("/auth/logout");
      if (res.data.statusCode === 200) {
        Cookies.remove("accessToken");
        Cookies.remove("user");

        toast.success("Log out successfully!");
        router.push("/");
      }
    } catch (error) {
      // @ts-ignore
      toast.error(error.response.data.message);
    }
  };

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/dashboard"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary-blue text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Travolks!</span>
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-4 px-2.5 text-foreground hover:text-foreground"
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/categories"
              className="flex items-center gap-4 px-2.5 text-foreground hover:text-foreground"
            >
              <Blocks className="h-5 w-5" />
              Categories
            </Link>
            <Link
              href="/dashboard/categories"
              className="flex items-center gap-4 px-2.5 text-foreground hover:text-foreground"
            >
              <PersonStanding className="h-5 w-5" />
              Users
            </Link>
            <Link
              href="/dashboard/categories"
              className="flex items-center gap-4 px-2.5 text-foreground hover:text-foreground"
            >
              <MountainSnow className="h-5 w-5" />
              Places
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div>
        <h1 className="font-bold text-xl text-primary-blue">TRAVOLKS!</h1>
      </div>
      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full  rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage
              src={isSuccess && userProfileData?.data.image}
              className="object-cover"
            />
            <AvatarFallback>TRV</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>
            <Dialog>
              <DialogTrigger>
                {isSuccess ? (
                  userProfileData?.data.fullname || userData?.data.email
                ) : (
                  <Skeleton className="w-16 h-4" />
                )}
              </DialogTrigger>
              <DialogContent className="w-9/12 rounded-md">
                <DialogHeader>
                  <DialogTitle className="mb-4">
                    User Profile Picture
                  </DialogTitle>
                  <DialogDescription>
                    {isSuccess ? (
                      <Image
                        src={userProfileData?.data.image}
                        alt="user profile"
                        width={500}
                        height={500}
                      />
                    ) : (
                      <Skeleton className="h-32 w-48" />
                    )}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Navbar;

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { formatDate } from "@/helper/formatDate";
import Image from "next/image";

interface TourGuideProfile {
  fullname: string;
  gender: string;
  phoneNumber: string;
  image: string;
}

interface TourGuide {
  id: string;
  email: string;
  profile: TourGuideProfile;
}

interface Place {
  id: string;
  name: string;
  slug: string;
  images: string[];
}

interface RegistrationPeriod {
  start: string;
  end: string;
}

interface TripPeriod {
  start: string;
  end: string;
}

interface Trip {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  registrationPeriod: RegistrationPeriod;
  tripPeriod: TripPeriod;
  image: string;
  tourGuide: TourGuide;
  places: Place[];
}

export const tripColumn: ColumnDef<Trip>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "image",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Image
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const trip = row.original;
      return (
        <div className="">
          {trip.image ? (
            <Image
              src={trip.image}
              alt={trip.name}
              width={400}
              height={400}
              className="w-full h-32 object-cover rounded-sm"
            />
          ) : (
            <Image
              src={"/images/blur.jpg"}
              alt={trip.name}
              width={400}
              height={400}
              className="w-full h-32 object-cover rounded-sm"
            />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("price")}</div>
    ),
  },
  {
    accessorKey: "tourGuide",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tour Guide
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const trip = row.original;
      return (
        <Link
          href={`/dashboard/users/${trip.tourGuide.id}`}
          className="text-blue-400 underline"
        >
          {trip.tourGuide.profile.fullname}
        </Link>
      );
    },
  },
  {
    accessorKey: "registrationPeriod",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Open Registration
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const trip = row.original;
      return (
        <div className="">{formatDate(trip.registrationPeriod.start)}</div>
      );
    },
  },
  {
    accessorKey: "registrationPeriod",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Close Registration
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const trip = row.original;
      return <div className="">{formatDate(trip.registrationPeriod.end)}</div>;
    },
  },
  {
    accessorKey: "tripPeriod",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Open Trip
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const trip = row.original;
      return <div className="">{formatDate(trip.tripPeriod.start)}</div>;
    },
  },
  {
    accessorKey: "tripPeriod",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Close Trip
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const trip = row.original;
      return <div className="">{formatDate(trip.tripPeriod.end)}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const trip = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(trip.slug)}
            >
              Copy trip&apos;s slug
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link href={`/dashboard/trips/${trip.slug}`}>
              <DropdownMenuItem>View trip</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

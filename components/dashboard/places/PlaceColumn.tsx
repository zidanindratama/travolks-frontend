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
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface Category {
  name: string;
  slug: string;
}

interface Place {
  id: string;
  name: string;
  slug: string;
  address: string;
  description: string;
  longitude: string;
  latitude: string;
  categories: Category[];
  images: string[];
}

export const placeColumn: ColumnDef<Place>[] = [
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
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <ChevronsUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "address",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Address
        <ChevronsUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="truncate">{row.getValue("address")}</div>
    ),
  },
  {
    accessorKey: "categories",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Categories
        <ChevronsUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const categories = row.getValue("categories") as Category[];
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {categories.length < 1 && <h1>-</h1>}
          {categories.map((category, index) =>
            index % 2 === 0 ? (
              <Badge
                variant="default"
                key={category.name}
                className="w-fit truncate h-fit"
              >
                {category.name}
              </Badge>
            ) : (
              <Badge
                variant="secondary"
                key={category.name}
                className="w-fit truncate h-fit"
              >
                {category.name}
              </Badge>
            )
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "images",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Image
        <ChevronsUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const images = row.getValue("images") as string[];
      return (
        <div>
          {images.length > 0 ? (
            <Image
              src={images[0]}
              width={500}
              height={500}
              alt="Image 1"
              className="w-24 h-16 object-cover rounded-sm"
            />
          ) : (
            <Image
              src={"/images/blur.jpg"}
              width={500}
              height={500}
              alt="Image blur"
              className="w-24 h-16 object-cover rounded-sm"
            />
          )}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const place = row.original;

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
              onClick={() => navigator.clipboard.writeText(place.name)}
            >
              Copy place name
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link href={`/dashboard/places/${place.slug}`}>
              <DropdownMenuItem>View place</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

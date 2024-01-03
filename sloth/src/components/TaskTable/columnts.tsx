import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type Owner = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
};
export type Task = {
  id: string;
  name: number;
  description: string;
  owner: Owner;
  status: "TODO" | "DONE";
};

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "owner",
    header: "Owner",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

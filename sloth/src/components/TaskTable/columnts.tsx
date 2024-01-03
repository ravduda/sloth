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
  deadline: Array<number>;
  status: "TODO" | "DONE";
};

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "owner",
    header: "Owner",
    cell: ({ row }) => {
      const owner: Owner = row.getValue("owner");
      const firstname = owner.firstname;
      const lastname = owner.lastname;
      const formatted = `${firstname} ${lastname}`;
      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "deadline",
    header: "Deadline",
    cell: ({ row }) => {
      const date: Array<number> = row.getValue("deadline");
      const formatted = `${date[0]}-${date[1]}-${date[2]}`;
      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

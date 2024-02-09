import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import axios from "axios";
import { getJWT } from "../JWTManager";
import RoleField from "./formComponents/RoleField";
import UsernameField from "./formComponents/UsernameField";
import { useTeamMembers } from "@/hooks/useTeamMembers";
import { ScrollArea } from "../ui/scroll-area";

const MemberForm = ({ teamId }: { teamId: number }) => {
  const { teamMembers, updateTeamMembers } = useTeamMembers({ teamId });
  console.log(teamMembers);
  const [open, setOpen] = useState(false);
  const formSchema = z.object({
    teamId: z.number(),
    username: z.string().min(2).max(50),
    role: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamId: teamId,
      username: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    axios
      .put(`http://localhost:8080/member`, values, {
        headers: {
          Authorization: "Bearer " + getJWT(),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(() => {
        updateTeamMembers();
        // setOpen(false);
      });
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
            />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Members</DialogTitle>
        </DialogHeader>
        <ScrollArea className="block max-h-[50rem]">
          <div className="grid gap-4 py-4">
            {teamMembers.length > 0 &&
              teamMembers.map((i, key) => {
                return (
                  <div key={key} className="border rounded p-2">
                    <p>
                      {i.user.firstname} {i.user.lastname}
                    </p>
                    <p className="text-xs">{i.user.email}</p>
                  </div>
                );
              })}
            <h2 className="text-2xl">Add member:</h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <UsernameField form={form} />
                <RoleField form={form} />
                <Button type="submit">Save</Button>
              </form>
            </Form>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default MemberForm;

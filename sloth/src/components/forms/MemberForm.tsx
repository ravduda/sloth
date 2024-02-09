import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import NameField from "./formComponents/NameField";
import { useState } from "react";
import axios from "axios";
import { getJWT } from "../JWTManager";

const MemberForm = ({ updateTeams }: { updateTeams: () => void }) => {
  const [open, setOpen] = useState(false);
  const formSchema = z.object({
    name: z.string().min(2).max(50),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    axios
      .put(`http://localhost:8080/team`, values, {
        headers: {
          Authorization: "Bearer " + getJWT(),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(() => {
        setOpen(false);
        updateTeams();
      });
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="h-24 w-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 h-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add team</DialogTitle>
          <DialogDescription>
            Fill team information. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <NameField form={form} />
              <Button type="submit">Save</Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MemberForm;

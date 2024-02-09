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
import DescriptionField from "./formComponents/DescriptionField";
import { useEffect, useState } from "react";
import axios from "axios";
import { getJWT } from "../JWTManager";

const ProjectForm = ({
  teamId,
  updateTeams,
}: {
  teamId: number;
  updateTeams: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const formSchema = z.object({
    name: z.string().min(2).max(50),
    description: z.string().max(250),
    teamId: z.number(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      teamId: teamId,
    },
  });
  useEffect(() => {
    form.setValue("teamId", teamId);
  }, [teamId]);
  function onSubmit(values: z.infer<typeof formSchema>) {
    axios
      .post(`http://localhost:8080/project`, values, {
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
        <Button
          variant="outline"
          className="w-full my-2 border-dashed border-primary"
        >
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add project</DialogTitle>
          <DialogDescription>
            Fill project information. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <NameField form={form} />
              <DescriptionField form={form} />
              <Button type="submit">Save</Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectForm;

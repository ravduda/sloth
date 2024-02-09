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
import DeadlineField from "./formComponents/DeadlineField";
import { useEffect, useState } from "react";
import ProjectIdField from "./formComponents/ProjectIdField";
import axios from "axios";
import { getJWT } from "../JWTManager";
import MemberField from "./formComponents/MemberField";
import { useParams } from "react-router-dom";

const TaskForm = ({ updateTasks }: { updateTasks: () => void }) => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const projectId = id == undefined ? 0 : parseInt(id);
  const formSchema = z.object({
    name: z.string().min(2).max(50),
    description: z.string().max(250),
    deadline: z.date(),
    projectId: z.number(),
    memberId: z.number(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      projectId: projectId,
      memberId: 0,
    },
  });
  useEffect(() => {
    form.setValue("projectId", projectId);
  }, [projectId]);
  function onSubmit(values: z.infer<typeof formSchema>) {
    axios
      .post(`http://localhost:8080/task`, values, {
        headers: {
          Authorization: "Bearer " + getJWT(),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(() => {
        setOpen(false);
        updateTasks();
      });
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
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
          Add task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add task</DialogTitle>
          <DialogDescription>
            Fill task information. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <NameField form={form} />
              <DescriptionField form={form} />
              <DeadlineField form={form} />
              <ProjectIdField form={form} />
              <MemberField form={form} />
              <Button type="submit">Save</Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskForm;

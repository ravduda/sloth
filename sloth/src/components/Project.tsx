import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

interface IProject {
  id: number;
  name: string;
  description: string;
}
const Project = (project: IProject) => {
  return (
    <Link
      to={`/dashboard/project/${project.id}`}
      className={cn(buttonVariants({ variant: "ghost" }), "w-full my-1 ")}
    >
      {project.name}
    </Link>
  );
};

export default Project;

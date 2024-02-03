import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";

interface ITeam {
  id: number;
  name: string;
  projects: Array<any>;
}
interface IMember {
  id: number;
  role: string;
  team: ITeam;
}
const TeamDetails = (membership: IMember) => {
  return (
    <Card className="p-5 border-primary h-80">
      <h2 className="text-3xl">{membership.team.name}</h2>
      <p>Your role in team: {membership.role}</p>
      <ScrollArea>
        {membership.team.projects &&
          membership.team.projects.map((project, key) => {
            return (
              <Link
                key={key}
                to={"/dashboard/project/" + project.id}
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "w-full my-2"
                )}
              >
                {project.name}
              </Link>
            );
          })}
        {membership.role === "OWNER" && (
          <Button
            variant="outline"
            className="w-full my-2 border-dashed border-primary"
          >
            New project
          </Button>
        )}
      </ScrollArea>
    </Card>
  );
};

export default TeamDetails;

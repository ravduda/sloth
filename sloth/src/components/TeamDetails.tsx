import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import ProjectForm from "./forms/ProjectForm";

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
const TeamDetails = ({
  updateTeamsList,
  membership,
}: {
  updateTeamsList: () => void;
  membership: IMember;
}) => {
  return (
    <Card className="p-5 border-primary h-80">
      <h2 className="text-3xl">{membership.team.name}</h2>
      <p>Your role in team: {membership.role}</p>
      <ScrollArea className="h-52">
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
          <ProjectForm
            teamId={membership.team.id}
            updateTeams={updateTeamsList}
          />
        )}
      </ScrollArea>
    </Card>
  );
};

export default TeamDetails;

import { cn } from "@/lib/utils";
import Project from "./Project";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { buttonVariants } from "./ui/button";

interface ITeam {
  id: number;
  name: string;
  projects: Array<any>;
}
const Team = (team: ITeam) => {
  return (
    <AccordionItem value="item">
      <AccordionTrigger
        className={cn(
          buttonVariants({ variant: "outline" }),
          "hover:decoration-0 my-2"
        )}
      >
        {team.name}
      </AccordionTrigger>
      <AccordionContent className="">
        {team.projects &&
          team.projects.map((project, key) => {
            return <Project key={key} {...project} />;
          })}
      </AccordionContent>
    </AccordionItem>
  );
};

export default Team;

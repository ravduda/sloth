import Project from "./Project";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface ITeam {
  id: number;
  name: string;
  projects: Array<any>;
}
const Team = (team: ITeam) => {
  console.log(team);
  return (
    <AccordionItem value="item">
      <AccordionTrigger>{team.name}</AccordionTrigger>
      <AccordionContent>
        {team.projects &&
          team.projects.map((project, key) => {
            return <Project key={key} {...project} />;
          })}
      </AccordionContent>
    </AccordionItem>
  );
};

export default Team;

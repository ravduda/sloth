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
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
  );
};

export default Team;

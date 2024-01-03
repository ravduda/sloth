import Team from "./Team";
import { Accordion } from "./ui/accordion";
import { useTeams } from "@/hooks/useTeams";

const Teams = () => {
  const { teamsList } = useTeams();

  return (
    <div className="w-full">
      {teamsList &&
        teamsList.map((i, key) => {
          return (
            <Accordion
              type="single"
              key={key}
              collapsible
              className="w-full p-4"
            >
              <Team key={key} {...i.team} />
            </Accordion>
          );
        })}
    </div>
  );
};

export default Teams;

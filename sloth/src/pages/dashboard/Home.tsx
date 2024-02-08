import TeamDetails from "@/components/TeamDetails";
import TeamForm from "@/components/forms/TeamForm";
import { Card } from "@/components/ui/card";
import { useTeams } from "@/hooks/useTeams";

const Home = () => {
  const { teamsList, updateTeamsList } = useTeams();
  console.log(teamsList);
  return (
    <div className="grid grid-cols-2 gap-3">
      {teamsList &&
        teamsList.length > 0 &&
        teamsList.map((i, key) => {
          return (
            <TeamDetails
              key={key}
              updateTeamsList={updateTeamsList}
              membership={i}
            />
          );
        })}
      <Card className="p-5 border-primary border-dashed h-80 text-center align-middle">
        <h2 className="text-3xl mt-14">Add new team</h2>
        <TeamForm updateTeams={updateTeamsList} />
      </Card>
    </div>
  );
};

export default Home;

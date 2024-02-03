import TeamDetails from "@/components/TeamDetails";
import { useTeams } from "@/hooks/useTeams";

const Home = () => {
  const { teamsList } = useTeams();
  console.log(teamsList);
  return (
    <div className="grid grid-cols-2 gap-3">
      {teamsList &&
        teamsList.length > 0 &&
        teamsList.map((i, key) => {
          return <TeamDetails key={key} {...i} />;
        })}
    </div>
  );
};

export default Home;

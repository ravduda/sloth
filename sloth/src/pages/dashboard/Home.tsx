import TeamDetails from "@/components/TeamDetails";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
      <Card className="p-5 border-primary border-dashed h-80 text-center align-middle">
        <h2 className="text-3xl mt-14">Add new team</h2>
        <Button variant="ghost" className="h-24 w-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 h-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Button>
      </Card>
    </div>
  );
};

export default Home;

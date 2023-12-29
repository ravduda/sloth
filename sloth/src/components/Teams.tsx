import axios from "axios";
import { useEffect, useState } from "react";
import { getJWT } from "./JWTManager";
import Team from "./Team";
import { Button } from "./ui/button";
import { Accordion } from "./ui/accordion";

const Teams = () => {
  const [teamsList, setTeamsList] = useState(Array<any>);

  useEffect(() => {
    axios
      .get("http://localhost:8080/team", {
        headers: {
          Authorization: "Bearer " + getJWT(),
        },
      })
      .then((response) => {
        console.log(response.data);
        setTeamsList(response.data);
      });
  }, []);
  return (
    <div className="w-full">
      {teamsList &&
        teamsList.map((i, key) => {
          return (
            <Accordion type="single" collapsible className="w-full p-4">
              <Team key={key} {...i.team} />
            </Accordion>
          );
        })}
    </div>
  );
};

export default Teams;

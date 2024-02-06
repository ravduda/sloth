import { getJWT } from "@/components/JWTManager";
import axios from "axios";
import { useEffect, useState } from "react";

export const useTeams = () => {
  const [teamsList, setTeamsList] = useState(Array<any>);

  const updateTeamsList = () => {
    axios
      .get("http://localhost:8080/team", {
        headers: {
          Authorization: "Bearer " + getJWT(),
        },
      })
      .then((response) => {
        setTeamsList(response.data);
      });
  };

  useEffect(() => {
    updateTeamsList();
  }, []);
  return { teamsList, updateTeamsList };
};

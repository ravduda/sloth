import { getJWT } from "@/components/JWTManager";
import axios from "axios";
import { useEffect, useState } from "react";

export const useTeamMembers = ({ teamId }: { teamId: number }) => {
  const [teamMembers, setTeamMembers] = useState(Array<any>);
  const updateTeamMembers = () => {
    if (teamId != undefined) {
      axios
        .get(`http://localhost:8080/team/members/${teamId}`, {
          headers: {
            Authorization: "Bearer " + getJWT(),
          },
        })
        .then((response) => {
          setTeamMembers(response.data);
        });
    } else {
      console.log("Id param undefined");
    }
  };
  useEffect(() => {
    updateTeamMembers();
  }, []);
  return { teamMembers, updateTeamMembers };
};

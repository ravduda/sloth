import { getJWT } from "@/components/JWTManager";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState(Array<any>);
  const { id } = useParams();
  useEffect(() => {
    if (id != undefined) {
      axios
        .get(`http://localhost:8080/team/members/${id}`, {
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
  }, []);
  return { teamMembers };
};

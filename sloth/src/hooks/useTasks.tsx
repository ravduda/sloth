import { getJWT } from "@/components/JWTManager";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useTasks = () => {
  const [taskList, setTaskList] = useState(Array<any>);
  const { id } = useParams();

  useEffect(() => {
    if (id != undefined)
      axios
        .get(`http://localhost:8080/project/${id}`, {
          headers: {
            Authorization: "Bearer " + getJWT(),
          },
        })
        .then((response) => {
          setTaskList(response.data.tasks);
        });
  }, [id]);
  return { taskList };
};

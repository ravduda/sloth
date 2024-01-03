import { getJWT } from "@/components/JWTManager";
import axios from "axios";
import { useEffect, useState } from "react";

export const useTasks = (id: any) => {
  const [taskList, setTaskList] = useState(Array<any>);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/project/${id.id}`, {
        headers: {
          Authorization: "Bearer " + getJWT(),
        },
      })
      .then((response) => {
        setTaskList(response.data.tasks);
      });
  }, []);
  return { taskList };
};

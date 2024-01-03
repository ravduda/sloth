import { getJWT } from "@/components/JWTManager";
import axios from "axios";
import { useEffect, useState } from "react";

export const useTasks = () => {
  const [taskList, setTaskList] = useState(Array<any>);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/project/2`, {
        headers: {
          Authorization: "Bearer " + getJWT(),
        },
        params: {
          projectId: 2,
        },
      })
      .then((response) => {
        console.log(response.data);
        setTaskList(response.data.tasks);
      });
  }, []);
  return { taskList };
};

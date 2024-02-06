import { getJWT } from "@/components/JWTManager";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface IProject {
  id: number;
  name: string;
  description: string;
  tasks: Array<any>;
  teamId: number;
}
interface ITask {
  id: number;
  name: string;
  description: string;
  owner: Owner;
  deadline: Date;
  status: string;
}
interface Owner {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}

export const useTasks = () => {
  const [taskList, setTaskList] = useState(Array<any>);
  const [project, setProject] = useState({} as IProject);
  const { id } = useParams();

  const updateTasks = () => {
    if (id != undefined) {
      axios
        .get(`http://localhost:8080/project/${id}`, {
          headers: {
            Authorization: "Bearer " + getJWT(),
          },
        })
        .then((response: any) => {
          console.log(response.data);
          setTaskList(response.data.tasks);
          setProject(response.data);
        });
    } else {
      console.log("Id param undefined");
    }
  };

  useEffect(() => {
    updateTasks();
  }, [id]);
  return { taskList, updateTasks, project };
};

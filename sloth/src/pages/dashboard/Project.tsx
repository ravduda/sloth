import Tasks from "@/components/Tasks";
import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();
  return <Tasks id={id} />;
};

export default Project;

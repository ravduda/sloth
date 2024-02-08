import { useTasks } from "@/hooks/useTasks";
import { DataTable } from "./TaskTable/data-table";
import { columns } from "./TaskTable/columnts";
import { createContext } from "react";
import TaskForm from "./forms/TaskForm";

export const UpdateTasksContext = createContext({ updateTasks: () => {} });

const Tasks = () => {
  const { taskList, updateTasks, project } = useTasks();

  return (
    <div>
      <h1 className="text-3xl font-bold inline align-top	m-2">{project.name}</h1>
      <TaskForm updateTasks={updateTasks} />
      <p className="m-2">{project.description}</p>
      {taskList && <DataTable columns={columns} data={taskList} />}
    </div>
  );
};

export default Tasks;

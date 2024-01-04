import { useTasks } from "@/hooks/useTasks";
import { DataTable } from "./TaskTable/data-table";
import { columns } from "./TaskTable/columnts";
import { createContext } from "react";

export const UpdateTasksContext = createContext({ updateTasks: () => {} });

const Tasks = () => {
  const { taskList, updateTasks } = useTasks();

  return (
    <div>
      {taskList && (
        <UpdateTasksContext.Provider value={{ updateTasks: updateTasks }}>
          <DataTable columns={columns} data={taskList} />
        </UpdateTasksContext.Provider>
      )}
    </div>
  );
};

export default Tasks;

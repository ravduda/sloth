import { useTasks } from "@/hooks/useTasks";
import { DataTable } from "./TaskTable/data-table";
import { columns } from "./TaskTable/columnts";
import { createContext } from "react";
import TaskForm from "./forms/TaskForm";
import { useTaskParams } from "@/hooks/useTasksParams";
import Paging from "./Paging";
import { Switch } from "./ui/switch";

export const UpdateTasksContext = createContext({ updateTasks: () => {} });

const Tasks = () => {
  const { page, setPage, onlyToDo, switchOnlyToDo } = useTaskParams();

  const { taskList, updateTasks, project } = useTasks({ page, onlyToDo });
  return (
    <div>
      <h1 className="text-3xl font-bold inline align-top	m-2">{project.name}</h1>
      <TaskForm updateTasks={updateTasks} />
      <p className="m-2">{project.description}</p>
      {taskList && (
        <div>
          Show only TODO
          <Switch
            className="ml-2"
            checked={onlyToDo}
            onCheckedChange={switchOnlyToDo}
          />
          <DataTable columns={columns} data={taskList} />
        </div>
      )}
      <Paging
        page={page}
        setPage={setPage}
        pageLimit={10}
        total={project.total}
      />
    </div>
  );
};

export default Tasks;

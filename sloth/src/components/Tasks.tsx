import { useTasks } from "@/hooks/useTasks";
import { DataTable } from "./TaskTable/data-table";
import { columns } from "./TaskTable/columnts";

const Tasks = () => {
  const { taskList } = useTasks();
  return (
    <div>{taskList && <DataTable columns={columns} data={taskList} />}</div>
  );
};

export default Tasks;

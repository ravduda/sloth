import Tasks from "@/components/Tasks";
import Teams from "@/components/Teams";
import { Card } from "@/components/ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";

const Dashboard = () => {
  return (
    <div className="h-screen flex">
      {/* <div className="h-10">Menu</div> */}
      <ScrollArea className="flex h-full w-2/12 items-center justify-center p-3">
        <Teams />
      </ScrollArea>
      <Card className="flex-1 p-3 my-2 mr-2">
        <Tasks />
      </Card>
    </div>
  );
};

export default Dashboard;

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
    <div className="h-screen">
      {/* <div className="h-10">Menu</div> */}
      <ResizablePanelGroup direction="horizontal" className="">
        <ResizablePanel defaultSize={20}>
          <ScrollArea className="flex h-full items-center justify-center p-3">
            <Teams />
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <div className="h-full p-3 m-3">
            <Card className="h-full p-3">content</Card>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Dashboard;

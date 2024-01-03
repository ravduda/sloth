import Teams from "@/components/Teams";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import logo from "@/assets/slothLogoOLarge.png";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="h-screen flex">
      {/* <div className="h-10">Menu</div> */}
      <ScrollArea className="flex h-full w-2/12 items-center justify-center p-3">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="h-10" />
        </Link>
        <Teams />
      </ScrollArea>
      <Card className="flex-1 p-3 my-3 mr-3 border-primary">
        <ScrollArea className="flex h-full items-center justify-center p-3">
          <Outlet />
        </ScrollArea>
      </Card>
    </div>
  );
};

export default Dashboard;

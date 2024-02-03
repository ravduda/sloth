import Teams from "@/components/Teams";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import logo from "@/assets/slothLogoOLarge.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import SideMenu from "@/components/SideMenu";
import { useEffect, useRef, useState } from "react";
import { getJWT } from "@/components/JWTManager";

const Dashboard = () => {
  const nav = useNavigate();
  const [hasJWT, setHasJWT] = useState(false);
  useEffect(() => {
    if (getJWT() == undefined) {
      nav("/login");
    } else {
      setHasJWT(true);
    }
  }, []);
  if (hasJWT) {
    return (
      <div className="h-screen flex">
        <ScrollArea className="flex h-full w-2/12 items-center justify-center p-3">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="h-10" />
          </Link>
          <SideMenu />
          <h2 className="text-2xl">Teams:</h2>
          <Teams />
        </ScrollArea>
        <Card className="flex-1 p-3 my-3 mr-3 border-primary">
          <ScrollArea className="flex h-full items-center justify-center p-3">
            <Outlet />
          </ScrollArea>
        </Card>
      </div>
    );
  }
  return <></>;
};

export default Dashboard;

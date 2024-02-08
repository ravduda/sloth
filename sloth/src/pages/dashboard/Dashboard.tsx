import Teams from "@/components/Teams";
import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import logo from "@/assets/slothLogoOLarge.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import SideMenu from "@/components/SideMenu";
import { useEffect, useState } from "react";
import { getJWT } from "@/components/JWTManager";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const nav = useNavigate();
  const [hasJWT, setHasJWT] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (getJWT() == undefined) {
      nav("/login");
    } else {
      setHasJWT(true);
    }
  }, []);
  const getMenuStyleClasses = () => {
    if (isMenuOpen) return "";
    else {
      return "h-0 md-h-auto";
    }
  };
  const swtichIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  if (hasJWT) {
    return (
      <div className="md:h-screen flex flex-col md:flex-row">
        <ScrollArea className="flex h-full items-center justify-center p-3">
          <div className="flex justify-between w-auto">
            <Link to={"/"}>
              <img src={logo} alt="logo" className="h-10" />
            </Link>
            <Button onClick={swtichIsMenuOpen} className="visible md:invisible">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
          </div>

          <div className={getMenuStyleClasses()}>
            <SideMenu />
            <h2 className="text-2xl">Teams:</h2>
            <Teams />
          </div>
        </ScrollArea>
        <Card className="flex-1 p-3 my-3 mx-3 border-primary">
          <ScrollArea className="flex h-full items-center justify-center p-3">
            <Outlet />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </Card>
      </div>
    );
  }
  return <></>;
};

export default Dashboard;

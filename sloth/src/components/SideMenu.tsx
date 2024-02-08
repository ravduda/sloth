import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { Button, buttonVariants } from "./ui/button";
import { deleteJWT, getJWTDecoded } from "./JWTManager";

const SideMenu = ({ ...params }) => {
  const jwtData: any = getJWTDecoded();
  const nav = useNavigate();
  const logout = () => {
    deleteJWT();
    nav("/login");
  };

  return (
    <div className="mt-10 gap-3 flex flex-col" {...params}>
      <div className="text-center">
        <div className="grid bg-secondary w-48 h-48 rounded-full m-auto text-8xl text-center content-center select-none">
          <div>{`${jwtData.firstname.substring(
            0,
            1
          )}${jwtData.lastname.substring(0, 1)}`}</div>
        </div>
        <div className="text-center text-2xl text-primary">{`${jwtData.firstname} ${jwtData.lastname}`}</div>
        <div className="text-center text-sm">{jwtData.sub}</div>
        <Button
          variant="outline"
          className="text-xs p-2 h-8 mt-1"
          onClick={logout}
        >
          Logout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
        </Button>
      </div>

      <Link to={"/dashboard"} className={cn(buttonVariants({}), "w-full my-2")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 m-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        Home
      </Link>
      {/* <Button variant="outline" className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 m-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
          />
        </svg>
        Teams details
      </Button> */}
    </div>
  );
};

export default SideMenu;

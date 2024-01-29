import LoginForm from "@/components/forms/LoginForm";
import { Card } from "@/components/ui/card";
import logo from "@/assets/slothLogoOLarge.png";

const Login = () => {
  return (
    <div className="w-96 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className="p-5">
        <img src={logo} alt="sloth" className="" />
      </div>
      <Card className="p-5 align-middle m-auto">
        <LoginForm />
      </Card>
    </div>
  );
};

export default Login;

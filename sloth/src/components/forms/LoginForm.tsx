import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import EmailField from "./formComponents/EmailField";
import PasswordField from "./formComponents/PasswordField";
import { Button } from "../ui/button";
import { setJWT } from "../JWTManager";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const nav = useNavigate();
  const formSchema = zod.object({
    email: zod.string(),
    password: zod.string(),
  });
  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: zod.infer<typeof formSchema>) {
    console.log(values);
    axios
      .post("http://localhost:8080/auth/authenticate", values)
      .then((response) => {
        if (response != null && response.data.token != null) {
          setJWT(response.data.token);
          nav("/dashboard");
        }
      });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <EmailField form={form} />
        <PasswordField form={form} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default LoginForm;

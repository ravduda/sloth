import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod";
// import FirstNameField from "./formComponents/FirstNameField";
import LastNameField from "./formComponents/LastNameField";
import EmailField from "./formComponents/EmailField";
import PasswordField from "./formComponents/PasswordField";
import { Button } from "../ui/button";
import FirstNameField from "./formComponents/FirstNameField";
import axios from "axios";
import { setJWT } from "../JWTManager";

const RegisterForm = () => {
  const formSchema = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    email: zod.string(),
    password: zod.string(),
  });
  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  function onSubmit(values: zod.infer<typeof formSchema>) {
    console.log(values);
    axios
      .post("http://localhost:8080/auth/register", values)
      .then((response) => {
        if (response != null && response.data.token != null) {
          setJWT(response.data.token);
        }
      });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FirstNameField form={form} />
        <LastNameField form={form} />
        <EmailField form={form} />
        <PasswordField form={form} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default RegisterForm;

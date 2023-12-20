import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const PasswordField = (form: any) => {
  return (
    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input type="password" placeholder="your password" {...field} />
          </FormControl>
          {/* <FormDescription>This is your public display name.</FormDescription> */}
          {/* <FormMessage /> */}
        </FormItem>
      )}
    />
  );
};

export default PasswordField;

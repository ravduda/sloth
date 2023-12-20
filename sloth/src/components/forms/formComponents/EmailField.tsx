import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const EmailField = (form: any) => {
  return (
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input placeholder="your email name" {...field} />
          </FormControl>
          {/* <FormDescription>This is your public display name.</FormDescription> */}
          {/* <FormMessage /> */}
        </FormItem>
      )}
    />
  );
};

export default EmailField;

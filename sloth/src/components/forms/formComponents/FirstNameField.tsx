import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FirstNameField = (form: any) => {
  return (
    <FormField
      control={form.control}
      name="firstName"
      render={({ field }) => (
        <FormItem>
          <FormLabel>First name</FormLabel>
          <FormControl>
            <Input placeholder="your first name" {...field} />
          </FormControl>
          {/* <FormDescription>This is your public display name.</FormDescription> */}
          {/* <FormMessage /> */}
        </FormItem>
      )}
    />
  );
};

export default FirstNameField;

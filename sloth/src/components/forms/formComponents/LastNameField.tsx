import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const LastNameField = (form: any) => {
  return (
    <FormField
      control={form.control}
      name="lastName"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Last name</FormLabel>
          <FormControl>
            <Input placeholder="your last name" {...field} />
          </FormControl>
          {/* <FormDescription>This is your public display name.</FormDescription> */}
          {/* <FormMessage /> */}
        </FormItem>
      )}
    />
  );
};

export default LastNameField;

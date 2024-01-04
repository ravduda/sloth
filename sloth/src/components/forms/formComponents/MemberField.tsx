import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const MemberField = (form: any) => {
  return (
    <FormField
      control={form.control}
      name="memberId"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Member</FormLabel>
          <FormControl>
            <Input type="number" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default MemberField;

import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const ProjectIdField = (form: any) => {
  return (
    <FormField
      control={form.control}
      name="projectId"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input type="hidden" {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default ProjectIdField;

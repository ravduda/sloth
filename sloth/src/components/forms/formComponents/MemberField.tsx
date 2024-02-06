import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTeamMembers } from "@/hooks/useTeamMembers";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";

const MemberField = ({ form }: any) => {
  const { teamMembers } = useTeamMembers();
  return (
    <FormField
      control={form.control}
      name="memberId"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Member</FormLabel>
          <br />
          <FormControl>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                      "w-[200px] justify-between",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value && teamMembers.length > 0
                      ? teamMembers.find((member) => member.id === field.value)
                          .user.firstname
                      : "Select member"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search member..." />
                  <CommandEmpty>No member found.</CommandEmpty>
                  <CommandGroup>
                    {teamMembers.map((member, key) => (
                      <CommandItem
                        value={member.id}
                        key={key}
                        onSelect={() => {
                          console.log("clicked");
                          form.setValue("memberId", member.id);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            member.value === field.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {`${member.user.firstname} ${member.user.lastname}`}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default MemberField;

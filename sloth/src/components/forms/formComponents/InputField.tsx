import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export interface InputFieldProps {
  label: string;
  description?: string;
  props?: InputProps;
}
const InputField = (field: any, props: InputFieldProps) => {
  return (
    <FormItem>
      <FormLabel>{props.label}</FormLabel>
      <FormControl>
        <Input {...props.props} {...field} />
      </FormControl>
      {props.description && (
        <FormDescription>{props.description}</FormDescription>
      )}
    </FormItem>
  );
};

export default InputField;

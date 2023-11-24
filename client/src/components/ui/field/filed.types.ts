import { LucideIcon } from "lucide-react";
import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface IFiledProps {
  placeholder: string;
  error?: FieldError;
  Icon?: LucideIcon;
}

export type TypeInputProps = InputHTMLAttributes<HTMLInputElement> &
  IFiledProps;

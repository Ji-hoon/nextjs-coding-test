"use client";

import { FormValues, RegisterFormFieldType } from "@/src/global/types";
import { UseFormRegister } from "react-hook-form";

export default function Inputfield({
  name,
  type,
  placeholder,
  defaultValue,
  register,
  min,
  max,
  autoFocus,
}: {
  name: RegisterFormFieldType;
  type: string;
  placeholder?: string;
  defaultValue?: string | string[] | undefined;
  register: UseFormRegister<FormValues>;
  min?: number;
  max?: number;
  autoFocus?: boolean;
}) {
  return (
    <input
      {...register(name)}
      className="appearance-none w-full border-slate-300 text-base leading-6 bg-transparent text-slate-900 placeholder:text-slate-400 rounded-md py-2 px-3  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      type={type}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      min={min}
      max={max}
      autoFocus={autoFocus}
    />
  );
}

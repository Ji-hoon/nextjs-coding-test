"use client";

import { RegisterFormFieldType, RegisterFormValues } from "@/src/global/types";
import { UseFormRegister } from "react-hook-form";

export default function Inputfield({
  name,
  type,
  placeholder,
  defaultValue,
  register,
}: {
  name: RegisterFormFieldType;
  type: string;
  placeholder: string;
  defaultValue?: string;
  register: UseFormRegister<RegisterFormValues>;
}) {
  return (
    <input
      {...register(name)}
      className="appearance-none w-full text-sm leading-6 bg-transparent text-slate-900 placeholder:text-slate-400 rounded-md py-2 px-3 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      type={type}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
}

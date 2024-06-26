import { FormValues, RegisterFormFieldType } from "@/src/global/types";
import { UseFormRegister } from "react-hook-form";

export default function Radiobutton({
  name,
  label,
  register,
  index,
  defaultValue,
}: {
  name: RegisterFormFieldType;
  label: string;
  register: UseFormRegister<FormValues>;
  index: number;
  defaultValue: string | string[] | undefined;
}) {
  return (
    <div className="flex gap-2 items-center">
      <input
        {...register(name)}
        name={name}
        type="radio"
        className="form-radio"
        id={label}
        value={index}
        defaultChecked={parseInt(defaultValue as string) === index}
      />
      <label htmlFor={label} className="flex-auto text-lg py-2 sm:py-1">
        {label}
      </label>
    </div>
  );
}

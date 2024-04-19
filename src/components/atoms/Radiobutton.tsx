import { FormValues, RegisterFormFieldType } from "@/src/global/types";
import { UseFormRegister } from "react-hook-form";

export default function Radiobutton({
  name,
  label,
  register,
}: {
  name: RegisterFormFieldType;
  label: string;
  register: UseFormRegister<FormValues>;
}) {
  return (
    <div className="flex gap-2 items-center py-1">
      <input
        {...register(name)}
        name={name}
        type="radio"
        className="form-radio"
        defaultChecked={label === "1회"}
        id={label}
      />
      <label htmlFor={label} className="">
        {label}
      </label>
    </div>
  );
}

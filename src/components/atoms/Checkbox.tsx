import { FormValues, RegisterFormFieldType } from "@/src/global/types";
import { UseFormRegister } from "react-hook-form";

export default function Checkbox({
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
        type="checkbox"
        className="form-checkbox rounded"
        id={label}
      />
      <label htmlFor={label} className="">
        {label}
      </label>
    </div>
  );
}

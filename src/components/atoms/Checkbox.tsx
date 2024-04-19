import { FormValues, RegisterFormFieldType } from "@/src/global/types";
import { UseFormRegister } from "react-hook-form";

export default function Checkbox({
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
  defaultValue: string[] | undefined;
}) {
  const matchedOption = defaultValue?.find(
    (value) => parseInt(value) === index
  );

  return (
    <div className="flex gap-2 items-center py-1">
      <input
        {...register(name)}
        name={name}
        type="checkbox"
        className="form-checkbox rounded"
        id={label}
        value={index}
        defaultChecked={matchedOption ? true : false}
      />
      <label htmlFor={label} className="flex-auto">
        {label}
      </label>
    </div>
  );
}

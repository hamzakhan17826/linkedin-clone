import clsx from "clsx";
import { FC } from "react";
interface InputFieldProps {
  className?: string;
  value?: string;
  id?: string;
}
const InputField: FC<InputFieldProps> = ({
  className,
  value,
  id,
}: InputFieldProps) => {
  return (
    <input
      type="text"
      value={value}
      id={id}
      className={clsx("border rounded-md px-3 py-1 mb-4", className)}
    />
  );
};

export default InputField;

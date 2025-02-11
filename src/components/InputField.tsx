import clsx from "clsx";
import { ChangeEvent, FC } from "react";
interface InputFieldProps {
  className?: string;
  value?: string;
  type?: string;
  id?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const InputField: FC<InputFieldProps> = ({
  className,
  value,
  type = "text",
  id,
  placeholder,
  onChange,
}: InputFieldProps) => {
  return (
    <input
      type={type}
      value={value}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      className={clsx("border rounded-md px-3 py-1 mb-4", className)}
    />
  );
};

export default InputField;

import clsx from "clsx";
import { FC, ReactNode } from "react";
interface FormLabelProps {
  children?: ReactNode;
  className?: string;
  htmlFor?: string;
}
const FormLabel: FC<FormLabelProps> = ({
  children,
  className,
  htmlFor = "",
}: FormLabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx("font-semibold text-sm mb-1", className)}
    >
      {children}
    </label>
  );
};

export default FormLabel;

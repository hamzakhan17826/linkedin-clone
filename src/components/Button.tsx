import clsx from "clsx";
import { ReactNode, FC } from "react";
interface ButtonProps {
  children?: ReactNode;
  className?: string;
}
const Button: FC<ButtonProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-3xl px-4 py-1.5 text-primary bg-secondary",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Button;

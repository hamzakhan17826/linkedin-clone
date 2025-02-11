import clsx from "clsx";
import { ReactNode, FC, ButtonHTMLAttributes } from "react";
interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}
const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type = "button",
}) => {
  return (
    <button
      className={clsx(
        "flex items-center justify-center rounded-3xl px-4 py-1.5 text-primary bg-secondary cursor-pointer",
        className
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

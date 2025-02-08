import clsx from "clsx";
import { ReactNode, FC } from "react";
interface CardProps {
  children?: ReactNode;
  className?: string;
}
const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "flex flex-col bg-primary border border-gray-300 rounded-lg p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;

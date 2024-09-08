import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface TechBadgeProps extends ComponentProps<"div"> {
  icon: JSX.Element;
  label: string;
}

const TechBadge = ({ className, label, icon, ...props }: TechBadgeProps) => {
  return (
    <>
      <div
        className={cn("flex flex-col justify-center items-center", className)}
        {...props}
      >
        {icon}
        <p className="text-sm md:text-base mt-2 md:mt-4 font-medium">{label}</p>
      </div>
    </>
  );
};

export default TechBadge;

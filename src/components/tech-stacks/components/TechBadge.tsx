import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface TechBadgeProps extends ComponentProps<"div"> {
  icon: JSX.Element;
  label: string;
}

const TechBadge = ({ className, label, icon, ...props }: TechBadgeProps) => {
  return (
    <div
      className={cn(
        "group flex flex-col justify-center items-center text-muted-foreground transition-colors hover:text-foreground",
        className
      )}
      {...props}
    >
      <div className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.03]">
        {icon}
      </div>
      <p className="text-sm md:text-base mt-2 md:mt-4 font-medium tracking-tight">
        {label}
      </p>
    </div>
  );
};

export default TechBadge;

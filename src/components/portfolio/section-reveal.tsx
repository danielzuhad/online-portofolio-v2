import { cn } from "@/lib/utils";

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  distance?: number;
  once?: boolean;
};

const SectionReveal = ({
  children,
  className,
}: SectionRevealProps) => {
  return <div className={cn(className)}>{children}</div>;
};

export default SectionReveal;

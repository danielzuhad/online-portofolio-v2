import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) => {
  return (
    <header className={cn("space-y-3", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary/90">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
        {description}
      </p>
    </header>
  );
};

export default SectionHeading;

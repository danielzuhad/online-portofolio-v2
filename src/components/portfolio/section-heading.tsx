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
      <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
        {eyebrow}
      </h2>
      {title || description ? (
        <p className="sr-only">{`${title}. ${description}`.trim()}</p>
      ) : null}
    </header>
  );
};

export default SectionHeading;

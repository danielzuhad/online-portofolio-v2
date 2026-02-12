import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { EXP } from "@/constants";
import SectionHeading from "../section-heading";
import SectionReveal from "../section-reveal";

const ExperienceSection = () => {
  return (
    <section id="experience" className="scroll-mt-28 py-10 pt-20">
      <SectionReveal>
        <SectionHeading
          eyebrow="Experience"
          title="Building products across internal systems and customer-facing platforms"
          description="My recent work focuses on business apps, performance, and production-ready interfaces that are easy to evolve as requirements grow."
        />
      </SectionReveal>

      <div className="relative mt-10">
        <span className="pointer-events-none absolute bottom-[15px] left-[8px] top-[15px] w-[2px] rounded-full bg-border/55 sm:left-[12px]" />
        <span className="pointer-events-none absolute bottom-[15px] left-[8px] top-[15px] w-[2px] rounded-full bg-gradient-to-b from-primary/90 via-primary/45 to-primary/10 shadow-[0_0_18px_hsl(var(--primary)/0.35)] sm:left-[12px]" />
        {EXP.map((experience, index) => (
          <SectionReveal
            key={experience.id}
            delayMs={index * 90}
            className="mb-8 last:mb-0"
          >
            <article className="relative pl-9 sm:pl-14">
              <span className="absolute left-[2px] top-8 inline-flex h-3.5 w-3.5 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--background)),0_0_0_1px_hsl(var(--primary)/0.55),0_0_16px_hsl(var(--primary)/0.5)] sm:left-[6px]" />

              <Card className="surface-card rounded-2xl border-border/70 bg-card/70">
                <CardContent className="space-y-4 p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold leading-tight">
                        {experience.role}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">
                          {experience.company}
                        </span>{" "}
                        · {experience.location} · {experience.employmentType}
                      </p>
                    </div>

                    <Badge
                      variant="outline"
                      className="rounded-full border-primary/40 bg-primary/5 px-3 py-1 text-xs font-medium"
                    >
                      {experience.period.display}
                    </Badge>
                  </div>

                  <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2.5">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {experience.stack && experience.stack.length > 0 ? (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {experience.stack.map((item) => (
                        <Badge
                          key={`${experience.id}-${item}`}
                          variant="secondary"
                          className="rounded-full bg-secondary/80"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            </article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

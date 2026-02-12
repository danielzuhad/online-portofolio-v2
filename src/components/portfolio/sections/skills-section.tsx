import { Card, CardContent } from "@/components/ui/card";
import { STACKS } from "@/constants";
import SectionHeading from "../section-heading";
import SectionReveal from "../section-reveal";

const SkillsSection = () => {
  return (
    <section id="skills" className="scroll-mt-28 py-20">
      <SectionReveal>
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use to ship reliable, modern web products"
          description="I prioritize maintainable code, reusable systems, and UI consistency while keeping delivery speed practical for real product teams."
        />
      </SectionReveal>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
        {STACKS.map((stack, index) => (
          <SectionReveal key={stack.label} delayMs={index * 55}>
            <Card className="group surface-card h-full rounded-2xl border-border/70 bg-card/70">
              <CardContent className="flex h-full flex-col items-center justify-center gap-3 p-4">
                <div className="text-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                  {stack.icon}
                </div>
                <p className="text-center text-xs font-medium text-muted-foreground">
                  {stack.label}
                </p>
              </CardContent>
            </Card>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

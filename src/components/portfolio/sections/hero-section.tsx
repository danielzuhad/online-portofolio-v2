import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PROFILE, PROFILE_HIGHLIGHTS, SOCIAL_LINKS } from "@/constants";
import { Mail } from "lucide-react";
import SectionReveal from "../section-reveal";

const HeroSection = () => {
  return (
    <section id="home" className="scroll-mt-28 pt-24 sm:pt-28">
      <div className="mx-auto w-full space-y-8 sm:space-y-10">
        <SectionReveal>
          <Card className="surface-card rounded-3xl border-border/70 bg-card/75">
            <CardContent className="space-y-6 p-6 sm:p-8 md:p-10">
              {/* <Badge
                variant="secondary"
                className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.22em] text-primary"
              >
                {PROFILE.availability}
              </Badge> */}

              <div className="space-y-4 w-full ">
                <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-center">
                  {PROFILE.fullName}
                </h1>
                <p className=" text-sm leading-relaxed text-muted-foreground sm:text-base text-center flex items-center justify-center  w-full">
                  A {PROFILE.role} based in {PROFILE.location}.{" "}
                  {PROFILE.summary}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground text-center w-full">
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  {PROFILE.email}
                </span>
              </div>

              <div className="flex flex-wrap justify-center gap-2 w-full">
                {SOCIAL_LINKS.map((social) => {
                  const isExternal = true;

                  return (
                    <Button
                      key={social.label}
                      asChild
                      variant="ghost"
                      className="h-9 rounded-full border border-transparent px-3 text-muted-foreground hover:border-border/70 hover:bg-card/80 hover:text-foreground"
                    >
                      <a
                        href={social.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                      >
                        <span className="mr-2">{social.icon}</span>
                        {social.label}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </SectionReveal>

        <SectionReveal delayMs={100}>
          <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PROFILE_HIGHLIGHTS.map((highlight) => (
              <Card
                key={highlight.label}
                className="surface-card rounded-2xl border-border/70 bg-card/65"
              >
                <CardContent className="space-y-1 p-4 sm:p-5">
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {highlight.label}
                  </dt>
                  <dd className="font-display text-xl font-semibold">
                    {highlight.value}
                  </dd>
                </CardContent>
              </Card>
            ))}
          </dl>
        </SectionReveal>
      </div>
    </section>
  );
};

export default HeroSection;

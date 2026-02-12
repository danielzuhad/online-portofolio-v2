import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SmartImage from "@/components/ui/smart-image";
import { PROJECTS } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Github, ImageOff } from "lucide-react";
import SectionHeading from "../section-heading";
import SectionReveal from "../section-reveal";

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-28 pt-10">
      <SectionReveal>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work with real users and practical outcomes"
          description="A mix of product experiments and production-focused builds where performance, architecture, and user experience all matter."
        />
      </SectionReveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <SectionReveal key={project.name} delayMs={index * 80}>
            {(() => {
              const imageSrc = project.image;
              const liveUrl = project.liveUrl;
              const gitHubUrl = project.gitHubUrl;
              const hasImage = Boolean(imageSrc);
              const hasTechStacks = project.techStacks.length > 0;

              return (
                <Card
                  className={cn(
                    "group surface-card h-full overflow-hidden rounded-3xl border-border/70 bg-card/70",
                    project.isUnderDev &&
                      "border-amber-500/35 bg-amber-500/[0.06] dark:border-amber-400/20",
                  )}
                >
                  <div className="relative overflow-hidden border-b border-border/60">
                    {imageSrc ? (
                      <SmartImage
                        src={imageSrc}
                        alt={`${project.name} preview`}
                        width={960}
                        height={600}
                        wrapperClassName="w-full"
                        skeletonClassName="bg-muted/70"
                        className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="flex h-56 w-full items-center justify-center bg-[radial-gradient(95%_130%_at_0%_0%,hsl(var(--primary)/0.18),transparent_55%),linear-gradient(hsl(var(--muted)/0.8),hsl(var(--muted)/0.45))]">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
                          <ImageOff className="h-3.5 w-3.5" />
                          Preview image not available yet
                        </div>
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute left-4 top-4 flex gap-2">
                      <Badge
                        variant={project.isUnderDev ? "secondary" : "default"}
                        className={
                          project.isUnderDev
                            ? "rounded-full border border-amber-500/90 bg-amber-500/60 text-amber-100  backdrop-blur-sm"
                            : "rounded-full border border-emerald-500/90  bg-emerald-500/60 text-emerald-100  backdrop-blur-sm"
                        }
                      >
                        {project.isUnderDev ? "Under Development" : "Live"}
                      </Badge>

                      {!hasImage ? (
                        <Badge
                          variant="secondary"
                          className="rounded-full border border-border/70 bg-background/70 text-muted-foreground backdrop-blur-sm"
                        >
                          No Preview
                        </Badge>
                      ) : null}
                    </div>
                  </div>

                  <CardContent className="space-y-4 p-5 sm:p-6">
                    <div className="space-y-2">
                      <h3 className="font-display text-xl font-semibold">
                        {project.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {project.description.trim() ||
                          "Project details coming soon."}
                      </p>
                    </div>

                    {hasTechStacks ? (
                      <div className="flex flex-wrap gap-2">
                        {project.techStacks.map((stack) => (
                          <Badge
                            key={`${project.name}-${stack}`}
                            variant="secondary"
                            className="rounded-full bg-secondary/80"
                          >
                            {stack}
                          </Badge>
                        ))}
                      </div>
                    ) : (
                      <Badge
                        variant="secondary"
                        className="w-fit rounded-full bg-secondary/80 text-muted-foreground"
                      >
                        Tech stack not published yet
                      </Badge>
                    )}

                    <div className="flex flex-wrap gap-2 pt-1">
                      {liveUrl ? (
                        <Button
                          asChild
                          size="sm"
                          className={cn(
                            "rounded-full px-4",
                            project.isUnderDev
                              ? "bg-amber-500 text-amber-950 hover:bg-amber-400 dark:text-amber-950"
                              : "bg-primary text-primary-foreground",
                          )}
                        >
                          <a
                            href={liveUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${project.name} ${
                              project.isUnderDev
                                ? "preview build (under development)"
                                : "live demo"
                            }`}
                          >
                            {project.isUnderDev ? "Preview Build" : "Live Demo"}
                            <ArrowUpRight className="ml-1.5 h-4 w-4" />
                          </a>
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          disabled
                          className="rounded-full bg-muted px-4 text-muted-foreground hover:bg-muted"
                        >
                          {project.isUnderDev
                            ? "Preview Soon"
                            : "Demo Unavailable"}
                        </Button>
                      )}

                      {gitHubUrl ? (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="rounded-full border-border/70 bg-background/60 px-4"
                        >
                          <a
                            href={gitHubUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Github className="mr-1.5 h-4 w-4" />
                            Source Code
                          </a>
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          disabled
                          className="rounded-full border-border/70 bg-background/60 px-4 text-muted-foreground"
                        >
                          <Github className="mr-1.5 h-4 w-4" />
                          Source Unavailable
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })()}
          </SectionReveal>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

import Anchor from "@/components/ui/anchor";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

interface ProjectsCardProps {
  className?: string;
  liveUrl?: string;
  gitHubUrl?: string;
  githubUrl?: string;
  name?: string;
  description?: string;
  techStacks?: string[];
  image?: string;
}

const ProjectsCard = ({
  className,
  liveUrl,
  gitHubUrl,
  githubUrl,
  name,
  description,
  techStacks,
  image,
}: ProjectsCardProps) => {
  const resolvedGithubUrl = gitHubUrl ?? githubUrl;
  const resolvedName = name ?? "Project";
  const isExternalLive = typeof liveUrl === "string" && liveUrl.startsWith("http");
  const isExternalGithub =
    typeof resolvedGithubUrl === "string" && resolvedGithubUrl.startsWith("http");

  return (
    <Card
      className={cn(
        "group w-full max-w-5xl overflow-hidden bg-card/60 backdrop-blur border-muted/40 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      <div className="grid sm:grid-cols-2">
        <a
          href={liveUrl}
          target={isExternalLive ? "_blank" : undefined}
          rel={isExternalLive ? "noreferrer" : undefined}
          className="relative block aspect-[16/10] sm:aspect-auto sm:h-full overflow-hidden bg-muted"
          aria-label={`Open ${resolvedName} live preview`}
        >
          {image ? (
            <Image
              src={image}
              alt={`${resolvedName} preview`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              priority={false}
            />
          ) : null}
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border/60" />
        </a>

        <div className="p-4 sm:p-6 flex flex-col justify-between gap-5">
          <div>
            <h3 className="text-lg sm:text-3xl font-semibold tracking-tight">
              {resolvedName}
            </h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground line-clamp-3 sm:line-clamp-4">
              {description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {techStacks?.map((tech, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="rounded-full px-3 py-1 text-[11px] font-medium"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {liveUrl ? (
              <Anchor
                href={liveUrl}
                variant="default"
                size="sm"
                target={isExternalLive ? "_blank" : undefined}
                rel={isExternalLive ? "noreferrer" : undefined}
                className="gap-2"
              >
                Live Demo
              </Anchor>
            ) : null}

            {resolvedGithubUrl ? (
              <Anchor
                href={resolvedGithubUrl}
                variant="outline"
                size="sm"
                target={isExternalGithub ? "_blank" : undefined}
                rel={isExternalGithub ? "noreferrer" : undefined}
                className="gap-2"
              >
                GitHub <GitHubLogoIcon />
              </Anchor>
            ) : null}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectsCard;

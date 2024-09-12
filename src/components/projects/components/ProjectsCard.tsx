import Anchor from "@/components/ui/anchor";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

interface ProjectsCardProps {
  className?: string;
  liveUrl?: string;
  githubUrl?: string;
  name?: string;
  description?: string;
  techStacks?: string[];
  image?: string;
}

const ProjectsCard = ({
  className,
  liveUrl,
  githubUrl,
  name,
  description,
  techStacks,
  image,
}: ProjectsCardProps) => {
  return (
    <>
      <Card
        className={cn(
          "w-full max-sm:max-w-[300px] sm:max-w-[900px] flex flex-col sm:flex-row  bg-muted h-full p-2 sm:p-4",
          className
        )}
      >
        <a
          href={liveUrl}
          className="w-full bg-red-800 h-[40%] sm:h-full rounded-md hover:cursor-pointer"
        >
          <img
            src={image}
            className="w-full h-full bg-slate-500 rounded-md object-cover border-[1px] border-muted-foreground/5"
            alt=""
          />
        </a>
        <div className="w-full h-[60%] sm:h-full pt-3  sm:pl-3 flex flex-col justify-between">
          <div>
            <h2 className="font-semibold text-lg sm:text-4xl">{name}</h2>

            <p className="text-xs mt-0.5 sm:mt-6 sm:text-sm md:line-clamp-none font-normal text-foreground/50 line-clamp-2">
              {description}
            </p>

            <div className="w-full mt-2 sm:mt-2 space-x-1 space-y-1">
              {techStacks?.map((tech, i) => (
                <Badge
                  key={i}
                  className="rounded-xl max-sm:px-2 max-sm:py-[1px] max-sm:text-[10px] font-light"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <Anchor
            href={githubUrl}
            size={"sm"}
            className="flex items-center justify-center gap-3 hover:cursor-pointer"
          >
            Github
            <GitHubLogoIcon />
          </Anchor>
        </div>
      </Card>
    </>
  );
};

export default ProjectsCard;

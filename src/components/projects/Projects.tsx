import Layout from "../layout/Layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ProjectsCard from "./components/ProjectsCard";
import { PROJECTS } from "./constants";
import Reveal from "@/components/motion/Reveal";

const Projects = () => {
  return (
    <Layout id="projects">
      <div className="w-full flex flex-col items-center">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl xl:text-4xl font-bold tracking-tight">
              Projects
            </h2>
            <p className="mt-2 text-sm md:text-base text-muted-foreground">
              Selected work I’ve built and shipped.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={120} className="w-full mt-10 flex justify-center">
          <Carousel className="w-full max-w-5xl flex flex-col gap-y-6 items-center">
            <CarouselContent>
              {PROJECTS.map((project, i) => (
                <CarouselItem key={i} className="basis-full">
                  <ProjectsCard {...project} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="w-full flex justify-center items-center gap-x-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </Layout>
  );
};

export default Projects;

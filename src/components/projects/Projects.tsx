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

const Projects = () => {
  return (
    <>
      <Layout id="projects" className="px-2 flex-col justify-start pt-28">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground/50 text-center text-xs mt-3">
          This is projects that i have done
        </p>
        <Carousel className="flex-col gap-y-5 flex w-[90vw]  mt-10 h-[55vh] sm:h-[60vh] items-center ">
          <CarouselContent>
            {PROJECTS.map((project, i) => (
              <CarouselItem key={i} className="basis-full">
                <ProjectsCard {...project} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="w-full flex justify-center items-center gap-x-5">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </Layout>
    </>
  );
};

export default Projects;

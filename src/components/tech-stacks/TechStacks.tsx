import Layout from "../layout/Layout";
import TechBadge from "./components/TechBadge";
import { STACKS } from "./constants";

const TechStacks = () => {
  return (
    <>
      <Layout
        id="tech-stacks"
        className="px-2 items-center max-sm:min-h-[65vh] sm:min-h-[60vh] pt-32"
      >
        <main className="w-full h-full">
          <h1 className="text-3xl font-bold xl:text-4xl text-center">
            Tech Stacks
          </h1>
          <p className="text-muted-foreground/50 text-center w-full flex justify-center mt-2 text-cemter text-sm md:text-base">
            This is tech stacks that i usually use
          </p>

          <div className="w-full mt-14 flex flex-wrap justify-center gap-9 lg:gap-x-16">
            {STACKS.map((stack, i) => (
              <TechBadge key={i} icon={stack.icon} label={stack.label} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default TechStacks;

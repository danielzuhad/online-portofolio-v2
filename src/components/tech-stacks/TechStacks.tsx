import Layout from "../layout/Layout";
import TechBadge from "./components/TechBadge";
import { STACKS } from "./constants";
import Reveal from "@/components/motion/Reveal";

const TechStacks = () => {
  return (
    <Layout id="tech-stacks">
      <div className="w-full">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl xl:text-4xl font-bold tracking-tight">
              Tech Stack
            </h2>
            <p className="mt-2 text-sm md:text-base text-muted-foreground">
              Tools and technologies I use regularly.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-10 sm:gap-12">
            {STACKS.map((stack, i) => (
              <TechBadge key={i} icon={stack.icon} label={stack.label} />
            ))}
          </div>
        </Reveal>
      </div>
    </Layout>
  );
};

export default TechStacks;

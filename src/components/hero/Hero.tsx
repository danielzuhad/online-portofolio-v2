import Layout from "../layout/Layout";
import Anchor from "../ui/anchor";
import { SOCIAL_LINKS } from "./constant";

const Hero = () => {
  return (
    <>
      <Layout id="home" className="px-2  min-h-[60vh] items-end">
        <main className=" mt-28 sm:mt-0 flex flex-col justify-end items-center w-full">
          <h1 className="text-4xl md:text-5xl xl:text-6xl text-center font-bold">
            Muhammad Daniel Zuhad
          </h1>
          <p className="text-xl mt-2 font-light text-muted-foreground text-center">
            Web Developer
          </p>

          <p className="text-center font-light text-muted-foreground text-xs mt-10 leading-7 lg:w-[70%] md:text-sm md:leading-8">
            I am a{" "}
            <strong className="font-semibold text-foreground">
              Front-End Developer
            </strong>{" "}
            with two years of experience specializing in{" "}
            <strong className="font-semibold text-foreground">
              HTML, CSS, JavaScript, TypeScript, React,
            </strong>{" "}
            and{" "}
            <strong className="font-semibold text-foreground">Next.js</strong>.
            I create responsive, user-friendly interfaces and translate designs
            into functional code. I thrive in collaborative environments,
            contributing to seamless web development and optimal user
            experiences.
          </p>

          <div className="mt-10 flex gap-2 flex-wrap justify-center items-center">
            {SOCIAL_LINKS.map((social, i) => {
              const isCV = social.label === "CV";
              const isExternal = social.href.startsWith("http");

              return (
                <Anchor
                  key={i}
                  variant="outline"
                  size="default"
                  href={social.href}
                  download={isCV ? "CV ATS.pdf" : undefined}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className={
                    isCV
                      ? "gap-x-2 bg-primary/10 border-primary/20 hover:bg-primary/15 hover:border-primary/30"
                      : "gap-x-2 text-muted-foreground hover:text-foreground"
                  }
                >
                  {social.icon}
                  {social.label}
                </Anchor>
              );
            })}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Hero;

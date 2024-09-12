import Layout from "../layout/Layout";
import Anchor from "../ui/anchor";
import { SOCIAL_LINKS } from "./constant";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <>
      <Layout id="home" className="px-2  min-h-[60vh] items-end">
        <main className=" mt-28 sm:mt-0 flex flex-col justify-end items-center w-full">
          <h1 className="text-4xl md:text-5xl xl:text-6xl text-center font-bold">
            Muhammad Daniel Zuhad
          </h1>
          <p className="text-xl mt-2 font-thin text-muted-foreground/50 text-center">
            Web Developer
          </p>

          <p className="text-center font-light text-muted-foreground text-xs mt-10 leading-7 lg:w-[70%] md:text-sm md:leading-8">
            I am a{" "}
            <strong className="font-semibold">Front-End Developer</strong> with
            two years of experience specializing in{" "}
            <strong className="font-semibold">
              HTML, CSS, JavaScript, TypeScript, React,
            </strong>{" "}
            and <strong className="font-semibold">Next.js</strong>. I create
            responsive, user-friendly interfaces and translate designs into
            functional code. I thrive in collaborative environments,
            contributing to seamless web development and optimal user
            experiences.
          </p>

          <div className="mt-10 flex gap-2 flex-wrap justify-center items-center">
            {SOCIAL_LINKS.map((social, i) =>
              social.label === "CV" ? (
                <Anchor
                  key={i}
                  variant={"default"}
                  size={"default"}
                  download={"CV ATS.pdf"}
                  href={social.href}
                  className="gap-x-2"
                >
                  {social.icon}
                  {social.label}
                </Anchor>
              ) : (
                <Anchor
                  key={i}
                  variant={"default"}
                  size={"default"}
                  href={social.href}
                  className={cn(
                    "gap-x-2",
                    social.label === "Linkedln" &&
                      "bg-blue-700 text-white hover:bg-blue-800",
                    social.label === "Instagram" &&
                      "bg-[#bb2859] text-white hover:bg-[#E1306C]/80",
                    social.label === "Email" &&
                      "bg-red-500 text-white hover:bg-red-700"
                  )}
                >
                  {social.icon}
                  {social.label}
                </Anchor>
              )
            )}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Hero;

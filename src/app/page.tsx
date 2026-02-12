import TopNav from "@/components/portfolio/top-nav";
import ExperienceSection from "@/components/portfolio/sections/experience-section";
import HeroSection from "@/components/portfolio/sections/hero-section";
import ProjectsSection from "@/components/portfolio/sections/projects-section";
import SkillsSection from "@/components/portfolio/sections/skills-section";

export default function Home() {
  return (
    <>
      <TopNav />

      <main className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
    </>
  );
}

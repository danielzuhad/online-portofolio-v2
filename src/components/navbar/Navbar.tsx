"use client";

import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";
import ThemeToggle from "./components/ThemeButton";
import { LINKS } from "./constants";

type LinkId = (typeof LINKS)[number]["id"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<LinkId | "">("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection: LinkId | "" = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - 100 &&
          window.scrollY < sectionTop + sectionHeight - 50
        ) {
          const sectionId = section.getAttribute("id") as LinkId;
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="w-full h-16 border-b shadow-sm border-primary/10 bg-background/70 supports-[backdrop-filter]:bg-background/50 backdrop-blur-md flex justify-center fixed px-2 z-50">
        <div className="container flex justify-between items-center">
          <ThemeToggle />

          <div>
            <Menubar className="p-0 sm:hidden">
              <MenubarMenu>
                <MenubarTrigger>
                  <AlignJustify />
                </MenubarTrigger>
                <MenubarContent>
                  {LINKS.map((link, i) => (
                    <MenubarItem
                      onClick={() => {
                        setActiveSection(link.id);
                        document
                          .getElementById(link.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      key={i}
                    >
                      {link.name}
                    </MenubarItem>
                  ))}
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <div className="max-sm:hidden flex gap-x-6">
              {LINKS.map((link, i) => (
                <a
                  onClick={() => {
                    setActiveSection(link.id);
                    document
                      .getElementById(link.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={cn(
                    "relative hover:cursor-pointer text-base transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-foreground/70 after:transition-transform after:duration-300 hover:after:scale-x-100",
                    activeSection === link.id
                      ? "text-foreground font-semibold after:scale-x-100"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  key={i}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

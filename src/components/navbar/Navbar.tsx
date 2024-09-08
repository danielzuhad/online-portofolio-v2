"use client";

import { AlignJustify } from "lucide-react";
import ThemeToggle from "./components/ThemeButton";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";
import { LINKS } from "./constants";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type LinkId = (typeof LINKS)[number]["id"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<LinkId | "">("");

  console.log({ activeSection });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection: LinkId | "" = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - 50 &&
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
      <nav className="w-full h-16 border-b-2 shadow-sm border-primary/5 bg-primary-foreground/50 backdrop-blur-md flex justify-center fixed px-2">
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
                    " hover:cursor-pointer text-base transition-all",
                    activeSection === link.id
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground"
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

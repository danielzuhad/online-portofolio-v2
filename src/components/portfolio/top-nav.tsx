"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import ThemeToggle from "./theme-toggle";

type LinkId = (typeof LINKS)[number]["id"];

const TopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<LinkId>(LINKS[0].id);

  const linkIds = useMemo(() => LINKS.map((link) => link.id), []);

  useEffect(() => {
    const sections = linkIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id as LinkId);
        }
      },
      {
        rootMargin: "-42% 0px -50% 0px",
        threshold: [0.1, 0.3, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [linkIds]);

  const scrollToSection = (id: LinkId) => {
    setActiveSection(id);
    setMenuOpen(false);

    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-border/70 bg-background/75 px-3 py-2 shadow-[0_12px_35px_-24px_hsl(var(--foreground)/0.45)] backdrop-blur-xl">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="group inline-flex items-center gap-2 rounded-lg px-2 py-1 text-left"
          aria-label="Go to home section"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
            MZ
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-foreground/90 sm:inline-block">
            Muhammad Daniel Zuhad
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {LINKS.map((link) => (
            <Button
              key={link.id}
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(link.id)}
              className={cn(
                "rounded-full px-4 text-sm",
                activeSection === link.id
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.name}
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Popover open={menuOpen} onOpenChange={setMenuOpen}>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-full border-border/70 md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-[1rem] w-[1rem]" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="mr-2 mt-2 w-48 rounded-xl border-border/70 bg-background/95 p-2 backdrop-blur-xl"
            >
              <div className="flex flex-col gap-1">
                {LINKS.map((link) => (
                  <Button
                    key={link.id}
                    type="button"
                    variant="ghost"
                    onClick={() => scrollToSection(link.id)}
                    className={cn(
                      "justify-start rounded-lg",
                      activeSection === link.id
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.name}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default TopNav;

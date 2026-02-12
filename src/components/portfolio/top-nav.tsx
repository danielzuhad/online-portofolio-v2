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

    let rafId = 0;

    const updateActiveSection = () => {
      const marker = window.scrollY + 160;
      let current = sections[0].id as LinkId;

      for (const section of sections) {
        if (marker >= section.offsetTop) {
          current = section.id as LinkId;
        } else {
          break;
        }
      }

      const isNearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      if (isNearBottom) {
        current = sections[sections.length - 1].id as LinkId;
      }

      setActiveSection((previous) =>
        previous === current ? previous : current,
      );
      rafId = 0;
    };

    const requestUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateActiveSection);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [linkIds]);

  const scrollToSection = (id: LinkId) => {
    setActiveSection(id);
    setMenuOpen(false);

    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-white/35 bg-background/55 shadow-[0_24px_45px_-32px_hsl(var(--foreground)/0.75)] ring-1 ring-white/30 backdrop-blur-2xl dark:border-white/10 dark:ring-white/10">
        {/* <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_160%_at_0%_0%,hsl(var(--primary)/0.22),transparent_50%),radial-gradient(120%_150%_at_100%_0%,hsl(var(--accent)/0.18),transparent_54%)]"
        /> */}

        <div className="relative flex items-center justify-between px-3 py-2">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="group inline-flex items-center gap-2 rounded-lg px-2 py-1 text-left"
            aria-label="Go to home section"
          >
            <span className="hidden text-sm font-semibold tracking-wide text-foreground/90 sm:inline-block">
              Muhammad Daniel Zuhad
            </span>
          </button>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Main navigation"
          >
            {LINKS.map((link) => (
              <Button
                key={link.id}
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "rounded-full border border-transparent px-4 text-sm",
                  activeSection === link.id
                    ? "border-primary/35 bg-primary/90 text-primary-foreground shadow-[0_10px_22px_-16px_hsl(var(--primary)/0.95)] hover:bg-primary"
                    : "text-muted-foreground hover:border-white/35 hover:bg-background/45 hover:text-foreground dark:hover:border-white/15",
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
                  className="h-9 w-9 rounded-full border-white/40 bg-background/45 shadow-[inset_0_1px_0_hsl(var(--background)/0.8)] backdrop-blur-md hover:bg-background/60 md:hidden dark:border-white/15"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-[1rem] w-[1rem]" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                className="relative mr-2 mt-2 w-52 overflow-hidden rounded-xl border border-white/35 bg-background/70 p-2 shadow-[0_24px_45px_-30px_hsl(var(--foreground)/0.75)] backdrop-blur-2xl dark:border-white/10"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_150%_at_0%_0%,hsl(var(--primary)/0.2),transparent_60%)]"
                />

                <div className="relative flex flex-col gap-1">
                  {LINKS.map((link) => (
                    <Button
                      key={link.id}
                      type="button"
                      variant="ghost"
                      onClick={() => scrollToSection(link.id)}
                      className={cn(
                        "justify-start rounded-lg border border-transparent",
                        activeSection === link.id
                          ? "border-primary/35 bg-primary/90 text-primary-foreground hover:bg-primary"
                          : "text-muted-foreground hover:border-white/35 hover:bg-background/45 hover:text-foreground dark:hover:border-white/15",
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
      </div>
    </header>
  );
};

export default TopNav;

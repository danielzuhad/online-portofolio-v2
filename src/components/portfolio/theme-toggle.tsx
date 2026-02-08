"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type ThemeToggleProps = {
  className?: string;
};

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className={cn(
        "relative h-9 w-9 rounded-full border-border/70 bg-background/70 backdrop-blur-sm",
        className
      )}
      onClick={() => {
        if (!mounted) return;
        setTheme(isDark ? "light" : "dark");
      }}
      aria-label="Toggle color mode"
    >
      <SunMedium
        className={cn(
          "h-[1rem] w-[1rem] transition-all duration-300",
          mounted && isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
        )}
      />
      <MoonStar
        className={cn(
          "absolute h-[1rem] w-[1rem] transition-all duration-300",
          mounted && isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;

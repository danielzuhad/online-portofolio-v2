"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      variant="outline"
      size="sm"
      className="flex justify-between items-center gap-x-5 dark:border-white/20 hover:bg-background relative transition-all"
    >
      <div
        className={cn("absolute transition-all h-full w-full left-0 rounded-md")}
      >
        <div
          className={cn(
            "w-[50%] h-full bg-primary/10 rounded-md backdrop-blur-sm transition-all duration-300",
            isDark ? "translate-x-full" : "translate-x-0"
          )}
        />
      </div>
      <SunIcon />
      <MoonIcon />
    </Button>
  );
};

export default ThemeToggle;

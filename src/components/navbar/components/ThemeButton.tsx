"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        variant="outline"
        size="sm"
        className=" flex justify-between items-center gap-x-5   dark:border-white/20 hover:bg-background relative transition-all"
      >
        <div
          className={cn(
            "absolute transition-all  h-full w-full left-0 rounded-md "
            // theme === "light" ? "translate-x-1" : "translate-x-full"
          )}
        >
          <div
            className={cn(
              "w-[50%] h-full bg-primary/10 rounded-md backdrop-blur-sm transition-all duration-300",
              theme === "light" ? "translate-x-full" : "translate-x-0"
            )}
          />
        </div>
        <SunIcon />
        <MoonIcon />
      </Button>
    </>
  );
};

export default ThemeToggle;

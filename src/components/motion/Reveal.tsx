"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

type RevealProps = React.HTMLAttributes<HTMLDivElement> & {
  delayMs?: number;
  once?: boolean;
};

export default function Reveal({
  className,
  children,
  delayMs = 0,
  once = true,
  ...props
}: RevealProps) {
  const elementRef = React.useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [reduceMotion, setReduceMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mediaQuery.matches);

    update();

    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  React.useEffect(() => {
    if (reduceMotion) {
      setIsVisible(true);
      return;
    }

    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, reduceMotion]);

  return (
    <div
      ref={elementRef}
      className={cn(
        reduceMotion ? "" : "will-change-transform",
        isVisible
          ? "animate-in fade-in slide-in-from-bottom-4 duration-700"
          : "opacity-0 translate-y-2",
        className
      )}
      style={isVisible ? { animationDelay: `${delayMs}ms` } : undefined}
      {...props}
    >
      {children}
    </div>
  );
}

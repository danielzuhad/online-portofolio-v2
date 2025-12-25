import { cn } from "@/lib/utils";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Layout = ({ children, className, id }: LayoutProps) => {
  return (
    <section
      id={id}
      className={cn(
        "max-w-screen w-full container px-2 py-24 sm:py-28 flex flex-col justify-center items-center scroll-mt-24",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Layout;

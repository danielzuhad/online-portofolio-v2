import { cn } from "@/lib/utils";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Layout = ({ children, className, id }: LayoutProps) => {
  return (
    <>
      <section
        id={id}
        className={cn(
          "min-h-screen max-w-screen w-full container flex justify-center items-center",
          className
        )}
      >
        {children}
      </section>
    </>
  );
};

export default Layout;

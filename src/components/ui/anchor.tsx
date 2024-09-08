import React, { ComponentPropsWithRef } from "react";
import { buttonVariants } from "./button";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface AnchorProps
  extends ComponentPropsWithRef<"a">,
    VariantProps<typeof buttonVariants> {}

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ className, variant, size, ...props }, ref) => {
    const Comp = "a";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Anchor.displayName = "Anchor";

export default Anchor;

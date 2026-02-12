"use client";

import { cn } from "@/lib/utils";
import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type SmartImageProps = ImageProps & {
  wrapperClassName?: string;
  skeletonClassName?: string;
};

const SmartImage = ({
  alt,
  className,
  wrapperClassName,
  skeletonClassName,
  onLoad,
  ...props
}: SmartImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      {!isLoaded ? (
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 animate-pulse bg-muted/60",
            skeletonClassName,
          )}
        />
      ) : null}

      <Image
        alt={alt}
        className={cn(
          "transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0",
          className,
        )}
        onLoad={(event) => {
          setIsLoaded(true);
          onLoad?.(event);
        }}
        {...props}
      />
    </div>
  );
};

export default SmartImage;

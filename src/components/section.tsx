import * as React from "react";
import { cn } from "@/lib/utils";

export function Section({
  wrapperClassName,
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { wrapperClassName?: string }) {
  return (
    <section
      className={cn("py-20 bg-background text-foreground", wrapperClassName)}
    >
      <div {...props} className={cn("container", className)}>
        {children}
      </div>
    </section>
  );
}

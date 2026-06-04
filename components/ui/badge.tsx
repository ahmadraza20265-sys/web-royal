import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[#d8ad45]/40 bg-[#d8ad45]/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#f8e6b0]",
        className
      )}
      {...props}
    />
  );
}

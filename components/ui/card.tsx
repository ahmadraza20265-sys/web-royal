import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-[#d8ad45]/18 bg-white/[0.08] shadow-xl shadow-black/20 backdrop-blur-xl",
        className
      )}
      {...props}
    />
  );
}

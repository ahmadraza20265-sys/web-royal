import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg" | "icon";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-[#d8ad45] text-[#102414] shadow-lg shadow-[#d8ad45]/25 hover:-translate-y-0.5 hover:bg-[#f0c85c]",
  secondary: "bg-white text-[#102414] shadow-lg shadow-black/10 ring-1 ring-white/70 hover:-translate-y-0.5 hover:bg-[#fff8e5]",
  ghost: "text-white hover:bg-white/10",
  outline: "border border-[#d8ad45]/50 bg-transparent text-[#f8e6b0] hover:bg-[#d8ad45]/10"
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "min-h-12 px-5 py-3 text-base",
  icon: "h-11 w-11 p-0"
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-bold transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#d8ad45] disabled:pointer-events-none disabled:opacity-60";

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; size?: ButtonSize }) {
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: ButtonVariant; size?: ButtonSize; children: ReactNode }) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  );
}

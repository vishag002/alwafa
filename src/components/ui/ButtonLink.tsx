import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline";
type Size = "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-secondary text-white hover:bg-secondary-dark",
  outline: "border border-white/70 text-white hover:bg-white/10",
};

const SIZES: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

interface ButtonLinkProps extends ComponentPropsWithoutRef<"a"> {
  href: string;
  variant?: Variant;
  size?: Size;
}

/** Anchor styled as a button. Opens in a new tab when `href` is external. */
export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: ButtonLinkProps) {
  const isExternal = /^https?:\/\//.test(href);
  
  

  return (
    <a
      href={href}
      className={cn(BASE, VARIANTS[variant], SIZES[size], className)}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    />
  );
}

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  /** "light" is for dark (navy) section backgrounds. */
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <p
          className={cn(
            "flex items-center gap-3 text-xs font-bold tracking-[0.15em] uppercase",
            isLight ? "text-secondary" : "text-primary-light",
          )}
        >
          <span aria-hidden className="h-0.5 w-8 rounded-full bg-secondary" />
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          "mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl",
          isLight ? "text-white" : "text-primary",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-base leading-relaxed sm:text-lg",
            isLight ? "text-white/80" : "text-text-secondary",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

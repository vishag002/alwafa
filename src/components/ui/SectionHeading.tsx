import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <p className="flex items-center gap-3 text-xs font-bold tracking-[0.15em] text-primary-light uppercase">
          <span aria-hidden className="h-0.5 w-8 rounded-full bg-secondary" />
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-text-secondary sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

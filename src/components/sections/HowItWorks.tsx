import { FileText, ListChecks, MessageCircle, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface Step {
  title: string;
  description: string;
  icon: LucideIcon;
}

const STEPS: readonly Step[] = [
  {
    title: "Explore Job Vacancies",
    description:
      "Browse our latest active employment opportunities across the Gulf.",
    icon: Search,
  },
  {
    title: "Contact Our Team",
    description:
      "Reach out through WhatsApp to express your interest in a vacancy.",
    icon: MessageCircle,
  },
  {
    title: "Share Your Details",
    description:
      "Provide your relevant information and documents as requested.",
    icon: FileText,
  },
  {
    title: "Follow the Next Steps",
    description:
      "Receive information about the application process and any further requirements.",
    icon: ListChecks,
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-background-light py-16 sm:py-20"
    >
      <Container>
        <SectionHeading
          id="how-it-works-heading"
          eyebrow="Application Process"
          title="How It Works"
          description="A clear overview of how to apply for the vacancies listed on this website."
        />

        <ol
          role="list"
          className="mt-10 grid gap-y-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4"
        >
          {STEPS.map(({ title, description, icon: Icon }, index) => {
            const isLast = index === STEPS.length - 1;
            // Tablet is a 2x2 grid: only the first column links to its neighbour.
            const linksOnTablet = index % 2 === 0;

            return (
              <li key={title} className="relative flex gap-4 sm:block">
                {/* Mobile: vertical timeline line to the next step */}
                {!isLast && (
                  <span
                    aria-hidden
                    className="absolute top-14 -bottom-6 left-6 w-px bg-primary/20 sm:hidden"
                  />
                )}
                {/* Tablet/desktop: horizontal line to the next step */}
                {!isLast && (
                  <span
                    aria-hidden
                    className={cn(
                      "absolute top-6 -right-4 left-16 hidden h-px bg-primary/20",
                      linksOnTablet ? "sm:block" : "lg:block",
                    )}
                  />
                )}

                <div className="relative size-12 shrink-0">
                  <span
                    aria-hidden
                    className="flex size-12 items-center justify-center rounded-full bg-primary text-secondary"
                  >
                    <Icon size={22} />
                  </span>
                  <span
                    aria-hidden
                    className="absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full bg-secondary text-xs font-bold text-primary ring-2 ring-background-light"
                  >
                    {index + 1}
                  </span>
                </div>

                <div className="sm:mt-5">
                  <h3 className="text-lg leading-snug font-bold text-primary">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

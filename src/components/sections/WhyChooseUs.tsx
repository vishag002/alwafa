import { ClipboardCheck, Globe, Layers, MessagesSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FEATURES: readonly Feature[] = [
  {
    title: "Gulf Job Opportunities",
    description:
      "Explore employment opportunities across the UAE and other Gulf countries.",
    icon: Globe,
  },
  {
    title: "Clear Communication",
    description:
      "Get clear information about available vacancies and application requirements.",
    icon: MessagesSquare,
  },
  {
    title: "Application Guidance",
    description:
      "Receive guidance throughout the application process and understand the next steps.",
    icon: ClipboardCheck,
  },
  {
    title: "Opportunities Across Industries",
    description:
      "Explore vacancies across construction, hospitality, technical and other sectors.",
    icon: Layers,
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="bg-white py-16 sm:py-20"
    >
      <Container>
        <SectionHeading
          id="why-choose-us-heading"
          eyebrow="Why GulfManpower Hub"
          title="Why Choose GulfManpower Hub?"
          description="We help job seekers explore employment opportunities across the UAE and other Gulf countries, with clear communication and application guidance."
        />

        <ul className="mt-10 grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {FEATURES.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="group rounded-xl border border-border bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-secondary/60 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-6"
            >
              <span
                aria-hidden
                className="flex size-12 items-center justify-center rounded-lg bg-primary text-secondary"
              >
                <Icon size={24} />
              </span>
              <h3 className="mt-5 text-lg leading-snug font-bold text-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

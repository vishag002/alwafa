import type { ReactNode } from "react";
import { Banknote, Briefcase, MapPin, Users } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { getJobCategory } from "@/data/job-categories";
import { formatSalary } from "@/lib/vacancies";
import { buildApplicationUrl } from "@/lib/whatsapp";
import type { Vacancy } from "@/types/vacancy";

interface VacancyCardProps {
  vacancy: Vacancy;
}

function MetaItem({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <span aria-hidden className="mt-0.5 shrink-0 text-secondary-dark">
        {icon}
      </span>
      <dt className="sr-only">{label}</dt>
      <dd className="text-sm font-medium text-text-primary">{children}</dd>
    </div>
  );
}

export function VacancyCard({ vacancy }: VacancyCardProps) {
  const category = vacancy.categoryId
    ? getJobCategory(vacancy.categoryId)
    : undefined;
  const salary = formatSalary(vacancy.salary);
  const description = vacancy.description.trim();
  const titleId = `vacancy-${vacancy.id}-title`;

  // Falls back to the contact section until a WhatsApp number is configured.
  const applyHref = buildApplicationUrl(vacancy) ?? "#contact";

  return (
    <article
      aria-labelledby={titleId}
      className="flex h-full flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <header>
        {category && (
          <p className="mb-3 inline-block rounded-full bg-background-light px-3 py-1 text-xs font-semibold text-primary">
            {category.label}
          </p>
        )}
        <h3 id={titleId} className="text-xl leading-snug font-bold text-primary">
          {vacancy.title}
        </h3>
      </header>

      <dl className="mt-4 flex flex-col gap-2.5">
        <MetaItem icon={<MapPin size={18} />} label="Location">
          {vacancy.location}, {vacancy.country}
        </MetaItem>
        {salary && (
          <MetaItem icon={<Banknote size={18} />} label="Salary">
            {salary}
          </MetaItem>
        )}
        <MetaItem icon={<Users size={18} />} label="Openings">
          {vacancy.vacancies}{" "}
          {vacancy.vacancies === 1 ? "Vacancy" : "Vacancies"}
        </MetaItem>
        {vacancy.employmentType && (
          <MetaItem icon={<Briefcase size={18} />} label="Employment type">
            {vacancy.employmentType}
          </MetaItem>
        )}
      </dl>

      {description && (
        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
      )}

      <div className="mt-auto pt-6">
        <ButtonLink
          href={applyHref}
          aria-label={`Apply now for ${vacancy.title}`}
          className="w-full"
        >
          Apply Now
        </ButtonLink>
      </div>
    </article>
  );
}

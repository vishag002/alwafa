import { CalendarDays } from "lucide-react";
import { formatIsoDate } from "@/lib/format-date";

interface VacancyLastUpdatedProps {
  /** ISO date (YYYY-MM-DD), e.g. VACANCY_LAST_UPDATED from data/vacancies.ts. */
  date: string;
}

export function VacancyLastUpdated({ date }: VacancyLastUpdatedProps) {
  const formatted = formatIsoDate(date);
  if (!formatted) return null;

  return (
    <p className="mt-4 flex items-center gap-2 text-sm text-text-secondary">
      <CalendarDays
        aria-hidden
        size={16}
        className="shrink-0 text-secondary-dark"
      />
      <span>
        Last updated: <time dateTime={date}>{formatted}</time>
      </span>
    </p>
  );
}
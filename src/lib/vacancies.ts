import type { Vacancy, VacancySalary } from "@/types/vacancy";

/** Active vacancies, newest first. Entries with an invalid date sort last. */
export function getActiveVacancies(vacancies: readonly Vacancy[]): Vacancy[] {
  const time = (value: string) => {
    const parsed = Date.parse(value);
    return Number.isNaN(parsed) ? 0 : parsed;
  };

  return vacancies
    .filter((vacancy) => vacancy.isActive)
    .sort((a, b) => time(b.postedAt) - time(a.postedAt));
}

const numberFormat = new Intl.NumberFormat("en-US");

/** "AED 1,000 – 1,200", or "AED 1,000" when min equals max. Null if unset. */
export function formatSalary({ min, max, currency }: VacancySalary): string | null {
  if (max <= 0) return null;
  if (min <= 0 || min === max) return `${currency} ${numberFormat.format(max)}`;
  return `${currency} ${numberFormat.format(min)} – ${numberFormat.format(max)}`;
}

const SALARY_NOT_SPECIFIED = "Salary not specified";

/**
 * Text for a vacancy's salary row: the formatted range when numeric, else the
 * salary note (e.g. "Based on experience"), else "Salary not specified".
 */
export function getSalaryText(
  salary: VacancySalary | null,
  salaryNote?: string,
): string {
  return (
    (salary && formatSalary(salary)) || salaryNote?.trim() || SALARY_NOT_SPECIFIED
  );
}
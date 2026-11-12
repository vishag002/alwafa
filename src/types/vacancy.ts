export type VacancyCurrency = "AED" | "SAR" | "QAR";

/**
 * Ids defined in data/job-categories.ts.
 * Unchanged from the original model: narrowing this union is deferred until a
 * project-wide search confirms nothing else references the other ids.
 */
export type JobCategoryId =
  | "construction"
  | "general-helper"
  | "drivers"
  | "technicians"
  | "hospitality"
  | "others";

/** Value of the category filter in Latest Job Opportunities. */
export type VacancyFilterId = "all" | JobCategoryId;

export interface VacancySalary {
  min: number;
  max: number;
  currency: VacancyCurrency;
}

export interface Vacancy {
  id: string;
  title: string;
  country: string;
  location: string;
  vacancies: number;
  salary: VacancySalary | null;
  /** Shown when `salary` is null, e.g. "Based on experience". */
  salaryNote?: string;
  benefits: string[];
  requirements: string[];
  description: string;
  isActive: boolean;
  postedAt: string;
  /** Optional: links the vacancy to an entry in JOB_CATEGORIES. */
  categoryId?: JobCategoryId;
  /** Optional free text, e.g. "Full-time". Hidden when omitted. */
  employmentType?: string;
}
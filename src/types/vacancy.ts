export type VacancyCurrency = "AED" | "SAR" | "QAR";

/** Ids defined in data/job-categories.ts. */
export type JobCategoryId =
  | "construction"
  | "general-helper"
  | "drivers"
  | "technicians"
  | "hospitality"
  | "others";

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
  salary: VacancySalary;
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

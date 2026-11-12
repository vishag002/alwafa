import type { JobCategoryId, VacancyFilterId } from "@/types/vacancy";

export interface JobCategory {
  id: JobCategoryId;
  label: string;
  /**
   * Confirmed first-phase job types for this category. These are position
   * titles only, not vacancy records; real listings live in data/vacancies.ts.
   */
  positions?: readonly string[];
}

export interface VacancyFilterOption {
  id: VacancyFilterId;
  label: string;
}

/**
 * Job categories are maintained independently of vacancies.
 * Icons are mapped in the UI layer, keyed by `id`.
 */
export const JOB_CATEGORIES: readonly JobCategory[] = [
  {
    id: "construction",
    label: "Construction",
    positions: ["Mason", "Carpenter", "Tiles Layer", "Helper"],
  },
  { id: "general-helper", label: "General Helper" },
  { id: "drivers", label: "Drivers" },
  {
    id: "technicians",
    label: "Technicians",
    positions: ["AC Technician"],
  },
  {
    id: "hospitality",
    label: "Hospitality",
    positions: ["Chef / Cook", "Waiter", "Accountant"],
  },
  { id: "others", label: "Others" },
];

export function getJobCategory(id: JobCategoryId): JobCategory | undefined {
  return JOB_CATEGORIES.find((category) => category.id === id);
}

/** Categories shown as filter buttons, in display order (after "All Jobs"). */
const FILTER_CATEGORY_IDS = [
  "construction",
  "hospitality",
  "technicians",
] as const satisfies readonly JobCategoryId[];

/** Filter buttons in display order: All Jobs, Construction, Hospitality, Technicians. */
export const VACANCY_FILTER_OPTIONS: readonly VacancyFilterOption[] = [
  { id: "all", label: "All Jobs" },
  ...FILTER_CATEGORY_IDS.flatMap((id) => {
    const category = getJobCategory(id);
    return category ? [{ id: category.id, label: category.label }] : [];
  }),
];
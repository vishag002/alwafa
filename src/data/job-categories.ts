export interface JobCategory {
  id: string;
  label: string;
}

/**
 * Job categories are maintained independently of vacancies.
 * Icons are mapped in the UI layer, keyed by `id`.
 */
export const JOB_CATEGORIES: readonly JobCategory[] = [
  { id: "construction", label: "Construction" },
  { id: "general-helper", label: "General Helper" },
  { id: "drivers", label: "Drivers" },
  { id: "technicians", label: "Technicians" },
  { id: "hospitality", label: "Hospitality" },
  { id: "others", label: "Others" },
];

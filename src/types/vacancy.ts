export type VacancyCurrency = "AED" | "SAR" | "QAR";

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
}

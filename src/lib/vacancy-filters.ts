   import type { Vacancy, VacancyFilterId } from "@/types/vacancy";

   export function filterVacanciesByCategory(
     vacancies: readonly Vacancy[],
     filter: VacancyFilterId,
   ): Vacancy[] {
     if (filter === "all") return [...vacancies];
     return vacancies.filter((vacancy) => vacancy.categoryId === filter);
   }
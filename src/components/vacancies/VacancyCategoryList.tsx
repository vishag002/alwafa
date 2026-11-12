"use client";

import { useState } from "react";

 
import { VacanciesEmptyState } from "@/components/vacancies/VacanciesEmptyState";
import { VacancyCard } from "@/components/vacancies/VacancyCard";
import { VACANCY_FILTER_OPTIONS } from "@/data/job-categories";
import { filterVacanciesByCategory } from "@/lib/vacancy-filters";
import type { Vacancy, VacancyFilterId } from "@/types/vacancy";

interface VacancyCategoryListProps {
  /** Active vacancies, already sorted by getActiveVacancies. */
  vacancies: readonly Vacancy[];
}

// NOTE: adjust these tokens if the Alwafa Tailwind theme names differ.
const BUTTON_BASE =
  "rounded-full border px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary";
const BUTTON_SELECTED = "border-primary bg-primary text-white";
const BUTTON_DEFAULT =
  "border-border bg-white text-primary hover:border-secondary hover:text-secondary-dark";

export function VacancyCategoryList({ vacancies }: VacancyCategoryListProps) {
  const [selected, setSelected] = useState<VacancyFilterId>("all");

  const visibleVacancies = filterVacanciesByCategory(vacancies, selected);

  return (
    <>
      <div
        role="group"
        aria-label="Filter jobs by category"
        className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3"
      >
        {VACANCY_FILTER_OPTIONS.map((option) => {
          const isSelected = option.id === selected;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelected(option.id)}
              className={`${BUTTON_BASE} ${
                isSelected ? BUTTON_SELECTED : BUTTON_DEFAULT
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10">
        {visibleVacancies.length > 0 ? (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleVacancies.map((vacancy) => (
              <li key={vacancy.id}>
                <VacancyCard vacancy={vacancy} />
              </li>
            ))}
          </ul>
        ) : (
          <VacanciesEmptyState />
        )}
      </div>
    </>
  );
}
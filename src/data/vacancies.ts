import type { Vacancy } from "@/types/vacancy";

/**
 * Single source of truth for vacancy content.
 *
 * Only add verified vacancies here. UI components must read from this list
 * and must handle it being empty.
 */
export const VACANCIES: readonly Vacancy[] = [];

import type { Vacancy } from "@/types/vacancy";

/**
 * Date the vacancy information was last reviewed, in ISO format (YYYY-MM-DD).
 * Update this manually whenever you review the vacancies. It is never set
 * automatically, so it stays the same across rebuilds and redeploys.
 */
export const VACANCY_LAST_UPDATED = "2026-11-11";

/**
 * Published vacancy records for the first recruitment phase.
 *
 * NOTE: every `vacancies` count below is temporary demo data. Update each
 * record's count individually once the final distribution is confirmed.
 * Benefits and requirements are empty until verified information is available.
 */
export const VACANCIES: readonly Vacancy[] = [
  // Construction
  {
    id: "mason",
    title: "Mason",
    country: "UAE",
    location: "Dibba, Fujairah",
    vacancies: 15,
    salary: { min: 1500, max: 1500, currency: "AED" },
    benefits: [],
    requirements: [],
    description: "Mason position available in Fujairah, UAE.",
    isActive: true,
    postedAt: "2026-11-11",
    categoryId: "construction",
  },
  {
    id: "carpenter",
    title: "Carpenter",
    country: "UAE",
    location: "Dibba, Fujairah",
    vacancies: 8,
    salary: { min: 1500, max: 1500, currency: "AED" },
    benefits: [],
    requirements: [],
    description: "Carpenter position available in Fujairah, UAE.",
    isActive: true,
    postedAt: "2026-11-11",
    categoryId: "construction",
  },
  {
    id: "tiles-layer",
    title: "Tiles Layer",
    country: "UAE",
    location: "Dibba, Fujairah",
    vacancies: 8,
    salary: { min: 1500, max: 1500, currency: "AED" },
    benefits: [],
    requirements: [],
    description: "Tiles Layer position available in Fujairah, UAE.",
    isActive: true,
    postedAt: "2026-11-11",
    categoryId: "construction",
  },
  {
    id: "helper",
    title: "Helper",
    country: "UAE",
    location: "Dibba, Fujairah",
    vacancies: 15,
    salary: { min: 1500, max: 1500, currency: "AED" },
    benefits: [],
    requirements: [],
    description: "Helper position available in Fujairah, UAE.",
    isActive: true,
    postedAt: "2026-11-11",
    categoryId: "construction",
  },

  // Hospitality
  {
    id: "chef-cook",
    title: "Chef / Cook",
    country: "UAE",
    location: "Dibba, Fujairah",
    vacancies: 4,
    salary: null,
    salaryNote: "Based on experience",
    benefits: [],
    requirements: [],
    description: "Chef / Cook position available in Fujairah, UAE.",
    isActive: true,
    postedAt: "2026-11-11",
    categoryId: "hospitality",
  },
  {
    id: "waiter",
    title: "Waiter",
    country: "UAE",
    location: "Dibba, Fujairah",
    vacancies: 8,
    salary: { min: 1500, max: 1500, currency: "AED" },
    benefits: [],
    requirements: [],
    description: "Waiter position available in Fujairah, UAE.",
    isActive: true,
    postedAt: "2026-11-11",
    categoryId: "hospitality",
  },
  {
    id: "accountant",
    title: "Accountant",
    country: "UAE",
    location: "Dibba, Fujairah",
    vacancies: 2,
    salary: null,
    benefits: [],
    requirements: [],
    description: "Accountant position available in Fujairah, UAE.",
    isActive: true,
    postedAt: "2026-11-11",
    categoryId: "hospitality",
  },

  // Technicians
  {
    id: "ac-technician",
    title: "AC Technician",
    country: "UAE",
    location: "Dibba, Fujairah",
    vacancies: 6,
    salary: { min: 2000, max: 2000, currency: "AED" },
    benefits: [],
    requirements: [],
    description: "AC Technician needed for duct and split AC installation, repair and maintenance. Minimum 2 years' experience required.",
    isActive: true,
    postedAt: "2026-11-11",
    categoryId: "technicians",
  },
];
import type { Vacancy } from "@/types/vacancy";

/**
 * Temporary realistic sample data for local UI testing.
 * Replace with verified vacancy information before deployment.
 */
export const VACANCIES: readonly Vacancy[] = [
  {
    id: "test-carpenter",
    title: "Carpenter",
    country: "UAE",
    location: "Dubai",
    vacancies: 5,
    salary: {
      min: 1200,
      max: 1500,
      currency: "AED",
    },
    benefits: [
      "Company Accommodation",
      "Transportation",
      "Medical Insurance",
    ],
    requirements: [
      "Minimum 2 years of experience",
      "Knowledge of carpentry tools",
      "Ability to read basic drawings",
    ],
    description:
      "Required experienced carpenters for construction and interior finishing work in Dubai.",
    isActive: true,
    postedAt: "2026-11-07",
    employmentType: "Full-time",
  },
  {
    id: "test-general-helper",
    title: "General Helper",
    country: "UAE",
    location: "Dubai",
    vacancies: 10,
    salary: {
      min: 900,
      max: 1100,
      currency: "AED",
    },
    benefits: [
      "Company Accommodation",
      "Transportation",
      "Medical Insurance",
    ],
    requirements: [
      "Physically fit",
      "Willingness to perform general labour duties",
      "Ability to follow workplace instructions",
    ],
    description:
      "General helpers required for assisting with daily site activities, material handling and other assigned tasks.",
    isActive: true,
    postedAt: "2026-11-07",
    employmentType: "Full-time",
  },
];
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VacanciesEmptyState } from "@/components/vacancies/VacanciesEmptyState";
import { VacancyCard } from "@/components/vacancies/VacancyCard";
import { VACANCIES } from "@/data/vacancies";
import { getActiveVacancies } from "@/lib/vacancies";

export function LatestVacancies() {
  const vacancies = getActiveVacancies(VACANCIES);

  return (
    <section
      id="vacancies"
      aria-labelledby="vacancies-heading"
      className="bg-background-light py-16 sm:py-20"
    >
      <Container>
        <SectionHeading
          id="vacancies-heading"
          eyebrow="Current Opportunities"
          title="Latest Job Opportunities"
          description="Explore available employment opportunities across the UAE and other Gulf countries."
        />

        <div className="mt-10">
          {vacancies.length > 0 ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {vacancies.map((vacancy) => (
                <li key={vacancy.id}>
                  <VacancyCard vacancy={vacancy} />
                </li>
              ))}
            </ul>
          ) : (
            <VacanciesEmptyState />
          )}
        </div>
      </Container>
    </section>
  );
}

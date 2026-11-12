import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VacancyCategoryList } from "@/components/vacancies/VacancyCategoryList";
import { VacancyLastUpdated } from "@/components/vacancies/VacancyLastUpdated";
import { VACANCIES, VACANCY_LAST_UPDATED } from "@/data/vacancies";
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

        <VacancyLastUpdated date={VACANCY_LAST_UPDATED} />

        <VacancyCategoryList vacancies={vacancies} />
      </Container>
    </section>
  );
}
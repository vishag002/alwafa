import { Briefcase } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function VacanciesEmptyState() {
  // Falls back to the contact section until a WhatsApp number is configured.
  const contactHref = buildWhatsAppUrl() ?? "#contact";

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center rounded-xl border border-border bg-white px-6 py-12 text-center shadow-sm sm:px-10">
      <span
        aria-hidden
        className="flex size-14 items-center justify-center rounded-full bg-background-light text-primary"
      >
        <Briefcase size={26} />
      </span>
      <h3 className="mt-5 text-xl font-bold text-primary">
        No Current Vacancies
      </h3>
      <p className="mt-2 text-base leading-relaxed text-text-secondary">
        We are updating our latest employment opportunities. Please check back
        soon or contact us for assistance.
      </p>
      <ButtonLink href={contactHref} size="lg" className="mt-6">
        Contact Us
      </ButtonLink>
    </div>
  );
}

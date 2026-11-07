import { Mail, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildWhatsAppUrl, getWhatsAppDisplayNumber } from "@/lib/whatsapp";

export function Contact() {
  const whatsappUrl = buildWhatsAppUrl();
  const whatsappNumber = getWhatsAppDisplayNumber();
  const email = SITE_CONFIG.email.trim();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-primary py-16 sm:py-20"
    >
      <Container className="grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <SectionHeading
          id="contact-heading"
          tone="light"
          eyebrow="Get in Touch"
          title="Let's Connect About Your Next Opportunity"
          description="Have questions about a vacancy or need more information? Contact our team and we'll help you understand the next steps."
        />

        <div className="rounded-2xl border border-white/10 bg-primary-dark p-6 shadow-lg sm:p-8">
          {whatsappUrl ? (
            <div>
              <div className="flex items-center gap-4">
                <span
                  aria-hidden
                  className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary"
                >
                  <MessageCircle size={24} />
                </span>
                <div>
                  <p className="text-sm font-medium text-white/70">WhatsApp</p>
                  {whatsappNumber && (
                    <p className="text-lg font-bold text-white">
                      {whatsappNumber}
                    </p>
                  )}
                </div>
              </div>
              <ButtonLink href={whatsappUrl} size="lg" className="mt-6 w-full">
                <MessageCircle aria-hidden size={18} />
                Chat on WhatsApp
              </ButtonLink>
            </div>
          ) : (
            !email && (
              <p className="rounded-lg border border-dashed border-white/25 px-4 py-5 text-center text-base text-white/80">
                Contact details will be available soon.
              </p>
            )
          )}

          {email && (
            <div
              className={
                whatsappUrl ? "mt-6 border-t border-white/10 pt-6" : undefined
              }
            >
              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-4 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
              >
                <span
                  aria-hidden
                  className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-secondary"
                >
                  <Mail size={22} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-white/70">
                    Email
                  </span>
                  <span className="block font-semibold break-all text-white underline-offset-4 group-hover:underline">
                    {email}
                  </span>
                </span>
              </a>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

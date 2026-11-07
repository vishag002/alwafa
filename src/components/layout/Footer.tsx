import { SITE_CONFIG } from "@/constants/site";
import { Container } from "@/components/ui/Container";
import { getSocialLinks } from "@/lib/social";
import { getWhatsAppDisplayNumber, buildWhatsAppUrl } from "@/lib/whatsapp";
import { Logo } from "./Logo";

const LINK_CLASS =
  "rounded-sm text-sm text-white/80 transition-colors hover:text-secondary focus-visible:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary";

export function Footer() {
  const email = SITE_CONFIG.email.trim();
  const whatsappUrl = buildWhatsAppUrl();
  const whatsappNumber = getWhatsAppDisplayNumber();
  const socialLinks = getSocialLinks();
  // Static export: the year is fixed at build time and refreshes on redeploy.
  const year = new Date().getFullYear();

  const hasContact = Boolean(email) || Boolean(whatsappUrl && whatsappNumber);

  return (
    <footer className="border-t border-white/10 bg-primary-dark text-white">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.3fr] lg:gap-12">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
            Connecting job seekers with employment opportunities across the UAE
            and other Gulf countries.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-bold tracking-wide text-white uppercase">
            Quick Links
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {SITE_CONFIG.navigation.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={LINK_CLASS}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {(hasContact || socialLinks.length > 0) && (
          <div>
            {hasContact && (
              <>
                <h2 className="text-sm font-bold tracking-wide text-white uppercase">
                  Get in Touch
                </h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {whatsappUrl && whatsappNumber && (
                    <li>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={LINK_CLASS}
                      >
                        WhatsApp: {whatsappNumber}
                      </a>
                    </li>
                  )}
                  {email && (
                    <li>
                      <a
                        href={`mailto:${email}`}
                        className={`${LINK_CLASS} break-all`}
                      >
                        {email}
                      </a>
                    </li>
                  )}
                </ul>
              </>
            )}

            {socialLinks.length > 0 && (
              <>
                <h2
                  className={`text-sm font-bold tracking-wide text-white uppercase ${hasContact ? "mt-8" : ""}`}
                >
                  Follow Us
                </h2>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                  {socialLinks.map((social) => (
                    <li key={social.platform}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={LINK_CLASS}
                      >
                        {social.label}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-5">
          <p className="text-center text-sm text-white/70">
            &copy; {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}

import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  // Falls back to the contact section until a WhatsApp number is configured.
  const applyHref = buildWhatsAppUrl() ?? "#contact";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary-dark">
      <Container className="relative flex h-(--header-height) items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {SITE_CONFIG.navigation.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="border-b-2 border-transparent py-2 text-[0.9375rem] font-semibold text-white transition-colors hover:border-secondary focus-visible:border-secondary focus-visible:outline-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={applyHref}>
            Apply Now <ArrowRight aria-hidden size={16} />
          </ButtonLink>
        </div>

        <MobileMenu links={SITE_CONFIG.navigation} applyHref={applyHref} />
      </Container>
    </header>
  );
}

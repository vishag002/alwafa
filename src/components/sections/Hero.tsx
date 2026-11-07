import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";

export function Hero() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-primary-dark"
    >
      <Container className="relative z-10 py-12 sm:py-16 lg:flex lg:min-h-[440px] lg:items-center lg:py-20">
        <div className="max-w-xl">
          <h1
            id="hero-heading"
            className="text-4xl leading-[1.1] font-extrabold tracking-tight text-white sm:text-5xl"
          >
            <span className="block">Your Gateway to</span>
            <span className="block text-secondary">Gulf Employment</span>
            <span className="block">Opportunities</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-white/90 sm:text-lg">
            Connecting skilled and unskilled workers from India with job
            opportunities in the UAE and other Gulf countries.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#vacancies" size="lg">
              View Latest Vacancies <ArrowRight aria-hidden size={18} />
            </ButtonLink>
            <ButtonLink
              href={whatsappUrl ?? "#contact"}
              variant="outline"
              size="lg"
            >
              <MessageCircle aria-hidden size={18} />
              {whatsappUrl ? "Chat on WhatsApp" : "Contact Us"}
            </ButtonLink>
          </div>
        </div>
      </Container>

      {/* Image sits below the copy on mobile and behind it from lg upwards. */}
      <div className="relative h-60 sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[66%]">
        <Image
          src="/images/hero.webp"
          alt="Construction worker in a hard hat in front of the Dubai skyline"
          fill
          preload
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="object-cover object-[75%_8%] lg:object-[35%_center]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-b from-primary-dark via-primary-dark/30 to-transparent lg:bg-linear-to-r lg:from-primary-dark lg:from-0% lg:via-primary-dark/50 lg:via-12% lg:to-transparent lg:to-32%"
        />
      </div>
    </section>
  );
}

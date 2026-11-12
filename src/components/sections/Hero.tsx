import { ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";

/**
 * Intrinsic pixel sizes of the two hero files in public/images. They only let
 * the browser reserve the right space before an image loads (no layout shift);
 * the images always render at their natural aspect ratio. Keep in sync with
 * the files.
 */
const MOBILE_IMAGE = { width: 1122, height: 1402 } as const; // hero-mobile.webp
const DESKTOP_IMAGE = { width: 1672, height: 941 } as const; // hero-desktop.webp

export function Hero() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-primary-dark"
    >
      <Container className="relative z-10 pt-8 pb-4 sm:py-16 lg:flex lg:min-h-[clamp(480px,42vw,720px)] lg:items-center lg:py-20">
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <h1
            id="hero-heading"
            className="text-[2rem] leading-[1.1] font-extrabold tracking-tight text-white sm:text-5xl"
          >
            <span className="block">Your Gateway to</span>
            <span className="block text-secondary">Gulf Employment</span>
            <span className="block">Opportunities</span>
          </h1>

          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-white/90 sm:mt-5 sm:text-lg lg:mx-0">
            Connecting skilled and unskilled workers from India with job
            opportunities in the UAE and other Gulf countries.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">
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

      {/*
        < 640px:    portrait hero-mobile.webp, in flow under the copy.
        640-1023px: landscape hero-desktop.webp, in flow under the copy.
        >= 1024px:  hero-desktop.webp fills the section behind the copy,
                    top-aligned so the helmet and face are never clipped.
        In flow the image is always w-full / h-auto, so it is never cropped
        and the section grows with it. <picture> makes the browser download
        only the file for the current width. Plain <img> is intentional:
        static export has no image optimizer, so next/image could not choose
        between two different artworks anyway.
      */}
      <div className="relative -mt-4 sm:mt-0 lg:absolute lg:inset-0">
        <picture>
          <source
            media="(min-width: 640px)"
            srcSet="/images/hero-desktop.webp"
            type="image/webp"
            width={DESKTOP_IMAGE.width}
            height={DESKTOP_IMAGE.height}
          />
          <img
            src="/images/hero-mobile.webp"
            width={MOBILE_IMAGE.width}
            height={MOBILE_IMAGE.height}
            alt="Construction worker in a hard hat in front of the Dubai skyline"
            fetchPriority="high"
            decoding="async"
            className="block h-auto w-full lg:absolute lg:inset-0 lg:h-full lg:object-cover lg:object-top"
          />
        </picture>
        {/*
          Below lg: soft fade from the navy section into the top of the image.
          Kept short from 640px because the landscape image has the helmet
          within ~20px of its top edge.
        */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-primary-dark via-primary-dark/50 to-transparent sm:h-10 sm:via-primary-dark/30 lg:hidden"
        />
        {/* From lg: navy fades out left to right so the skyline shows through. */}
        <div
          aria-hidden
          className="absolute inset-0 hidden lg:block lg:bg-linear-to-r lg:from-primary-dark/95 lg:from-0% lg:via-primary-dark/75 lg:via-30% lg:to-transparent lg:to-62%"
        />
      </div>
    </section>
  );
}

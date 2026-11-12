import { SITE_CONFIG } from "@/constants/site";

const [BRAND_FIRST, BRAND_LAST] = ["AL", "WAFA"];

/**
 * Text wordmark. Swap for an <Image> once the official logo file is supplied.
 */
export function Logo() {
  return (
    <a
      href="#home"
      aria-label={`${SITE_CONFIG.name} home`}
      className="flex flex-col leading-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      <span className="text-xl font-extrabold whitespace-nowrap tracking-tight text-white sm:text-2xl">
        {BRAND_FIRST} <span className="text-secondary">{BRAND_LAST}</span>
      </span>
      <span className="mt-1 hidden text-[0.6875rem] font-medium text-white/70 sm:block">
        Connecting Workforce to Opportunities.
      </span>
    </a>
  );
}

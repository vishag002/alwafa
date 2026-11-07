import { SITE_CONFIG } from "@/constants/site";
import type { Vacancy } from "@/types/vacancy";

const WHATSAPP_BASE_URL = "https://wa.me";

/** Shortest and longest valid international numbers (E.164), digits only. */
const MIN_INTERNATIONAL_DIGITS = 8;
const MAX_INTERNATIONAL_DIGITS = 15;

/** Length of a national (country code excluded) Indian mobile number. */
const NATIONAL_NUMBER_LENGTH = 10;

export const GENERAL_ENQUIRY_MESSAGE = `Hello ${SITE_CONFIG.name}, I would like to know about current job opportunities.`;

type VacancyReference = Pick<Vacancy, "id" | "title" | "country" | "location">;

/**
 * Converts a configured number into the digits-only international format that
 * wa.me expects. Accepts a national number ("98765 43210") or one that already
 * includes the country code ("+91 98765 43210").
 *
 * Returns null when the value is empty or not a plausible phone number.
 */
export function normalizeWhatsAppNumber(
  rawNumber: string,
  countryCode: string,
): string | null {
  const digits = rawNumber.replace(/\D/g, "").replace(/^0+/, "");
  if (!digits) return null;

  const code = countryCode.replace(/\D/g, "");
  const hasCountryCode =
    digits.length > NATIONAL_NUMBER_LENGTH && digits.startsWith(code);
  const international = hasCountryCode ? digits : `${code}${digits}`;

  if (
    international.length < MIN_INTERNATIONAL_DIGITS ||
    international.length > MAX_INTERNATIONAL_DIGITS
  ) {
    return null;
  }

  return international;
}

/** The configured recruitment number, or null until one is provided. */
export function getWhatsAppNumber(): string | null {
  return normalizeWhatsAppNumber(
    SITE_CONFIG.contact.whatsapp,
    SITE_CONFIG.contact.countryCode,
  );
}

/**
 * Builds a WhatsApp chat link with a prefilled message.
 * Returns null when no valid number is configured, so callers can render a
 * fallback instead of a broken link.
 */
export function buildWhatsAppUrl(
  message: string = GENERAL_ENQUIRY_MESSAGE,
): string | null {
  const number = getWhatsAppNumber();
  if (!number) return null;

  return `${WHATSAPP_BASE_URL}/${number}?text=${encodeURIComponent(message)}`;
}

export function buildApplicationMessage(vacancy: VacancyReference): string {
  return [
    `Hello ${SITE_CONFIG.name}, I would like to apply for the following vacancy:`,
    `Position: ${vacancy.title}`,
    `Location: ${vacancy.location}, ${vacancy.country}`,
    `Reference: ${vacancy.id}`,
  ].join("\n");
}

/** WhatsApp application link for a vacancy, or null if unavailable. */
export function buildApplicationUrl(vacancy: VacancyReference): string | null {
  return buildWhatsAppUrl(buildApplicationMessage(vacancy));
}

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const ISO_DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;

/**
 * Formats an ISO calendar date (YYYY-MM-DD) as "11 November 2026".
 *
 * The string is parsed and formatted as plain numbers, never through a Date
 * in the local time zone, so the result is identical on the server, in the
 * browser and in every time zone. Returns null for anything that is not a
 * real calendar date, so callers can skip rendering instead of showing
 * "Invalid Date".
 */
export function formatIsoDate(isoDate: string): string | null {
  const match = ISO_DATE_PATTERN.exec(isoDate);
  if (!match) return null;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  // Round-trip through UTC to reject dates such as 2026-02-30.
  const check = new Date(Date.UTC(year, month - 1, day));
  const isRealDate =
    check.getUTCFullYear() === year &&
    check.getUTCMonth() === month - 1 &&
    check.getUTCDate() === day;
  if (!isRealDate) return null;

  return `${day} ${MONTH_NAMES[month - 1]} ${year}`;
}
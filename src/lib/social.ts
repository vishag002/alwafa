import { SITE_CONFIG } from "@/constants/site";

export type SocialPlatform = keyof typeof SITE_CONFIG.social;

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

const PROFILE_BASE_URLS: Record<SocialPlatform, string> = {
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
};

const PLATFORM_LABELS: Record<SocialPlatform, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
};

/** Accepts a full URL or a handle (with or without "@"). */
function resolveProfileUrl(platform: SocialPlatform, value: string): string {
  if (/^https?:\/\//i.test(value)) return value;
  return `${PROFILE_BASE_URLS[platform]}${value.replace(/^@/, "")}`;
}

/** Configured social links only; platforms left empty are omitted. */
export function getSocialLinks(): SocialLink[] {
  return (Object.keys(SITE_CONFIG.social) as SocialPlatform[]).flatMap(
    (platform) => {
      const value = SITE_CONFIG.social[platform].trim();
      if (!value) return [];

      return [
        {
          platform,
          label: PLATFORM_LABELS[platform],
          href: resolveProfileUrl(platform, value),
        },
      ];
    },
  );
}

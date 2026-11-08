export const SITE_CONFIG = {
  name: "GulfManpower Hub",

  description:
    "Connecting workers with employment opportunities across the Gulf.",

  tagline: "Your Gateway to Gulf Employment Opportunities",

  email: "gulfmanpowerhub@gmail.com",

  social: {
    instagram: "https://www.instagram.com/gulfmanpowerhub.in/",
    facebook: "https://www.facebook.com/profile.php?id=61596384057849",
  },

  contact: {
    // TEMPORARY PLACEHOLDER - NOT a verified business number. For local development and
    // testing only. Replace with the real recruitment number before any public deployment.
    whatsapp: "8281566037",
    countryCode: "91",
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "Vacancies", href: "#vacancies" },
    { label: "About Us", href: "#why-choose-us" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
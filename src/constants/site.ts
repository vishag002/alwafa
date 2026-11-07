export const SITE_CONFIG = {
  name: "GulfManpower Hub",

  description:
    "Connecting workers with employment opportunities across the Gulf.",

  tagline: "Your Gateway to Gulf Employment Opportunities",

  email: "gulfmanpowerhub@gmail.com",

  social: {
    instagram: "",
    facebook: "",
  },

  contact: {
    whatsapp: "", // Add recruitment number later
    countryCode: "91",
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "Vacancies", href: "#vacancies" },
    { label: "About Us", href: "#why-choose-us" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
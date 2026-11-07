import { SITE_CONFIG } from "@/constants/site";

/**
 * Temporary Foundation placeholder. Homepage sections (Navbar, Hero, ...)
 * replace this in later phases.
 */
export default function Home() {
  return (
    <main
      id="main-content"
      className="flex flex-1 flex-col items-center justify-center gap-2 px-4 text-center"
    >
      <h1 className="text-3xl font-extrabold text-primary">
        {SITE_CONFIG.name}
      </h1>
      <p className="text-text-secondary">{SITE_CONFIG.tagline}</p>
    </main>
  );
}

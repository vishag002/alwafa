import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-md focus:bg-secondary focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
      </main>
    </>
  );
}

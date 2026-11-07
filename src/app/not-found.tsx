import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center bg-primary-dark">
      <Container className="py-20 text-center sm:py-28">
        <p className="text-sm font-bold tracking-[0.15em] text-secondary uppercase">
          Error 404
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
          The page you are looking for does not exist or may have been moved.
        </p>
        <ButtonLink href="/" size="lg" className="mt-8">
          Back to Homepage
        </ButtonLink>
      </Container>
    </main>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "../ui/ButtonLink";

interface MobileMenuProps {
  links: readonly { label: string; href: string }[];
  applyHref: string;
}

export function MobileMenu({ links, applyHref }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex size-11 items-center justify-center rounded-md text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
      >
        {open ? <X aria-hidden size={24} /> : <Menu aria-hidden size={24} />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-t border-white/10 bg-primary-dark shadow-xl"
        >
          <nav aria-label="Mobile" className="px-4 py-3 sm:px-6">
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={close}
                    className="block rounded-md px-3 py-3 text-base font-medium text-white hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ButtonLink
              href={applyHref}
              onClick={close}
              size="lg"
              className="mt-3 w-full"
            >
              Apply Now
            </ButtonLink>
          </nav>
        </div>
      )}
    </div>
  );
}

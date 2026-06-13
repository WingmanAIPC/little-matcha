"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { cn } from "@/lib/cn";

const links = [
  { href: "#story", label: "Our Story" },
  { href: "#menu", label: "Menu" },
  { href: "#shop", label: "Shop" },
  { href: "#classes", label: "Classes" },
  { href: "#visit", label: "Visit" },
];

const ORDER_URL = "https://littlematchacincy.square.site/";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onLight = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        onLight
          ? "border-b border-matcha-900/10 bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a
          href="#top"
          className={cn(
            "transition-colors",
            onLight ? "text-ink" : "text-cream-foam"
          )}
          aria-label="Little Matcha home"
        >
          <Logo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "link-underline text-sm font-medium tracking-wide transition-colors",
                onLight
                  ? "text-ink/80 hover:text-ink"
                  : "text-cream-foam/85 hover:text-cream-foam"
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5",
              onLight
                ? "bg-matcha-700 text-cream-foam hover:bg-matcha-800"
                : "bg-cream-foam text-matcha-900 hover:bg-white"
            )}
          >
            Order Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className={cn(
            "relative z-50 flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden",
            onLight ? "text-ink" : "text-cream-foam"
          )}
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={cn(
                "h-0.5 w-full rounded-full bg-current transition-all duration-300",
                open && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full rounded-full bg-current transition-all duration-300",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full rounded-full bg-current transition-all duration-300",
                open && "-translate-y-2 -rotate-45"
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "grid overflow-hidden bg-cream/95 backdrop-blur-md transition-all duration-500 md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-1 px-5 pb-8 pt-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-matcha-900/10 py-4 font-display text-2xl text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-5 rounded-full bg-matcha-700 px-5 py-4 text-center font-semibold text-cream-foam"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

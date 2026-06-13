"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="rounded-full bg-cream-foam/10 px-6 py-4 text-center font-medium text-cream-foam ring-1 ring-cream-foam/20">
        You&apos;re on the list — see you for the next drop.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex w-full flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="you@email.com"
        className="w-full rounded-full border border-cream-foam/20 bg-cream-foam/5 px-5 py-3.5 text-cream-foam placeholder:text-cream-foam/40 focus:border-cream-foam/50 focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-matcha-400 px-7 py-3.5 font-semibold text-matcha-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-matcha-300"
      >
        Notify me
      </button>
    </form>
  );
}

import Logo from "../Logo";
import NewsletterForm from "../NewsletterForm";

const IG_URL = "https://www.instagram.com/littlematcha.cincy/";
const ORDER_URL = "https://littlematchacincy.square.site/";

const explore = [
  { href: "#story", label: "Our Story" },
  { href: "#menu", label: "Menu" },
  { href: "#shop", label: "Shop" },
  { href: "#classes", label: "Classes" },
  { href: "#visit", label: "Visit" },
];

export default function Footer() {
  return (
    <footer className="bg-matcha-900 text-cream-foam">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        {/* Newsletter */}
        <div className="grid gap-8 border-b border-cream-foam/10 pb-14 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Never miss a flavor drop.
            </h2>
            <p className="mt-3 max-w-md text-cream-foam/70">
              New seasonal drinks land every two weeks. Get a heads-up before
              they hit the counter.
            </p>
          </div>
          <NewsletterForm />
        </div>

        {/* Links */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo wordClassName="text-cream-foam" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-foam/60">
              A tiny green escape. Hand-whisked, single-origin matcha from
              Shizuoka, Japan.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-foam/50">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {explore.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream-foam/80 transition-colors hover:text-cream-foam"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-foam/50">
              Visit
            </h3>
            <ul className="mt-4 space-y-3 text-cream-foam/80">
              <li>332 Scott St.</li>
              <li>Covington, KY 41011</li>
              <li className="pt-2 text-sm text-cream-foam/60">
                Mon–Fri 7:30a–4p
                <br />
                Sat 10a–5p · Sun 10a–4p
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-foam/50">
              Say hi
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-foam/80 transition-colors hover:text-cream-foam"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={ORDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-foam/80 transition-colors hover:text-cream-foam"
                >
                  Order online
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-cream-foam/10 pt-8 text-sm text-cream-foam/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Little Matcha. All rights reserved.</p>
          <p>Whisked with care in Covington, Kentucky.</p>
        </div>
      </div>
    </footer>
  );
}

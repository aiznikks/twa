"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/events", label: "Events" },
    { href: "/my-events", label: "My seats" },
    { href: "/pricing", label: "Pricing" },
    { href: "/#how", label: "How it works" },
  ];

  return (
    <div className="nav-wrap">
      <header className={`nav${scrolled ? " is-scrolled" : ""}`} role="banner">
        <Link href="/" className="brand" aria-label="Two Words Away, home">
          <span className="brand__mark" aria-hidden="true">
            <span></span>
            <span></span>
          </span>
          <span className="brand__name">Two Words Away</span>
        </Link>
        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav__cta">
          <Link href="/login" className="btn btn--sm btn--secondary">
            Log in
          </Link>
          <Link href="/register" className="btn btn--sm btn--primary">
            Reserve
            <ArrowRight size={14} weight="regular" aria-hidden />
          </Link>
        </div>
      </header>
    </div>
  );
}

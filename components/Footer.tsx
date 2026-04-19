import Link from "next/link";
import {
  ArrowUpRight,
  LinkedinLogo,
  XLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__intro">
          <h2 className="h2">
            We&apos;re here whenever the next table matters.
          </h2>
        </div>

        <div className="footer__grid">
          <div className="footer__col footer__brand-col">
            <Link href="/" className="brand">
              <span className="brand__mark" aria-hidden="true">
                <span></span>
                <span></span>
              </span>
              <span className="brand__name">Two Words Away</span>
            </Link>
            <p>
              Curated dinners and coffees for people who take the evening
              seriously.
            </p>
          </div>

          <div className="footer__col">
            <h4>Rooms</h4>
            <ul>
              <li>
                <Link href="/events">Browse tables</Link>
              </li>
              <li>
                <Link href="/my-events">My seats</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/register">Reserve a seat</Link>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>About</h4>
            <ul>
              <li>
                <a href="mailto:help@twowordsaway.com">
                  Contact{" "}
                  <ArrowUpRight size={12} weight="regular" className="ext" aria-hidden />
                </a>
              </li>
              <li>
                <a href="mailto:help@twowordsaway.com?subject=Support">
                  Support{" "}
                  <ArrowUpRight size={12} weight="regular" className="ext" aria-hidden />
                </a>
              </li>
              <li>
                <a href="mailto:help@twowordsaway.com?subject=Feedback">
                  Feedback{" "}
                  <ArrowUpRight size={12} weight="regular" className="ext" aria-hidden />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twowordsaway.com/terms-and-privacy.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  Terms &amp; Privacy{" "}
                  <ArrowUpRight size={12} weight="regular" className="ext" aria-hidden />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Press</h4>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=3JnIxb3myl8&t=3821s"
                  target="_blank"
                  rel="noopener"
                >
                  Shark Tank India{" "}
                  <ArrowUpRight size={12} weight="regular" className="ext" aria-hidden />
                </a>
              </li>
              <li>
                <a href="mailto:founder@twowordsaway.com?subject=Media">
                  Media &amp; PR{" "}
                  <ArrowUpRight size={12} weight="regular" className="ext" aria-hidden />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; 2026 Two Words Away. All rights reserved.</span>
          <span className="footer__locale">India · English</span>
          <div className="footer__socials" aria-label="Social links">
            <a href="#" aria-label="LinkedIn">
              <LinkedinLogo size={14} weight="fill" aria-hidden />
            </a>
            <a href="#" aria-label="X / Twitter">
              <XLogo size={13} weight="fill" aria-hidden />
            </a>
            <a href="#" aria-label="Instagram">
              <InstagramLogo size={14} weight="regular" aria-hidden />
            </a>
            <a href="#" aria-label="YouTube">
              <YoutubeLogo size={14} weight="fill" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

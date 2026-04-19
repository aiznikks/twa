import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist or has moved.",
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="four-oh-four">
        <p
          className="eyebrow"
          style={{
            justifyContent: "center",
            display: "inline-flex",
            marginBottom: "2rem",
          }}
        >
          Error
        </p>
        <div className="four-oh-four__portrait">
          <span className="four-oh-four__num">404</span>
        </div>
        <h1 className="four-oh-four__title">This table doesn&apos;t exist.</h1>
        <p className="four-oh-four__desc">
          The page you were looking for doesn&apos;t exist or has moved on. The
          good ones usually do. Head back and we&apos;ll find you a seat at
          something real.
        </p>
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link href="/" className="btn btn--primary">
            Go home
            <ArrowRight size={16} weight="regular" aria-hidden />
          </Link>
          <Link href="/events" className="btn btn--secondary">
            Browse tables
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

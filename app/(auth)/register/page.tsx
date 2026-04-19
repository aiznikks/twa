import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Create an account",
  description:
    "Create a free Two Words Away account and join curated dinners and coffees.",
};

export default function RegisterPage() {
  return (
    <>
      <div className="auth-card">
        <Link href="/" className="auth-brand" aria-label="Two Words Away, home">
          <span className="brand__mark" aria-hidden="true">
            <span></span>
            <span></span>
          </span>
          <span>Two Words Away</span>
        </Link>

        <p className="eyebrow auth-eyebrow">Sign up</p>
        <h1 className="auth-title">Create your account.</h1>
        <p className="auth-sub">
          Already have an account? <Link href="/login">Log in</Link>
        </p>

        <form noValidate>
          <div className="form-group">
            <label htmlFor="fullname">Full name</label>
            <input
              className="form-input"
              id="fullname"
              type="text"
              placeholder="How we'll greet you at the table"
              autoComplete="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              className="form-input"
              id="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-input"
              id="password"
              type="password"
              placeholder="At least 8 characters"
              autoComplete="new-password"
              minLength={8}
              required
            />
          </div>

          <label className="form-check">
            <input type="checkbox" required />
            <span>
              I agree to the{" "}
              <a
                href="https://www.twowordsaway.com/terms-and-privacy.pdf"
                target="_blank"
                rel="noopener"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="https://www.twowordsaway.com/terms-and-privacy.pdf"
                target="_blank"
                rel="noopener"
              >
                Privacy Policy
              </a>
              .
            </span>
          </label>

          <button type="submit" className="btn btn--primary">
            Create account
            <ArrowRight size={16} weight="regular" aria-hidden />
          </button>
        </form>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <Link href="/login" className="btn btn--secondary">
          Sign in to existing account
        </Link>
      </div>

      <p
        style={{
          marginTop: "1.5rem",
          fontSize: "0.8125rem",
          color: "var(--slate)",
          textAlign: "center",
        }}
      >
        Takes under a minute. We&apos;ll curate your first table within the week.
      </p>
    </>
  );
}

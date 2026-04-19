import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Log in",
  description: "Sign in to your Two Words Away account.",
};

export default function LoginPage() {
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

        <p className="eyebrow auth-eyebrow">Sign in</p>
        <h1 className="auth-title">Welcome back.</h1>
        <p className="auth-sub">
          Don&apos;t have an account yet? <Link href="/register">Sign up free</Link>
        </p>

        <form noValidate>
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
              placeholder="Your password"
              autoComplete="current-password"
              required
            />
          </div>

          <p className="form-helper">
            <a href="#forgot">Forgot password?</a>
          </p>

          <button type="submit" className="btn btn--primary">
            Log in
            <ArrowRight size={16} weight="regular" aria-hidden />
          </button>
        </form>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <Link href="/register" className="btn btn--secondary">
          Create a free account
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
        By continuing you agree to our{" "}
        <a
          href="https://www.twowordsaway.com/terms-and-privacy.pdf"
          target="_blank"
          rel="noopener"
          style={{
            color: "var(--ink)",
            borderBottom: "1px solid var(--signal-light)",
          }}
        >
          Terms &amp; Privacy
        </a>
        .
      </p>
    </>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Propose a table",
  description:
    "Propose a curated table — we'll build the room around what you want the evening to move.",
};

export default function CreatePage() {
  return (
    <>
      <section
        className="page-hero container"
        style={{ textAlign: "left", maxWidth: 820 }}
      >
        <p className="eyebrow" style={{ justifyContent: "flex-start" }}>
          Propose a table
        </p>
        <Reveal kind="headline" as="h1" className="page-hero__title">
          <span style={{ textAlign: "left", margin: "1rem 0", display: "block" }}>
            Who should be in the room?
          </span>
        </Reveal>
        <Reveal kind="fade" as="p" className="page-hero__lede">
          <span style={{ textAlign: "left", margin: 0, display: "block" }}>
            Tell us the kind of evening you want and we&apos;ll build a small
            table around it. We reply within 48 hours with a short match list.
          </span>
        </Reveal>
      </section>

      <section className="section section--tight">
        <div className="container" style={{ maxWidth: 720 }}>
          <Reveal
            kind="fade"
            as="div"
            className="auth-card"
          >
            <div
              style={{
                textAlign: "left",
                padding: "clamp(2rem,4vw,3rem)",
              }}
            >
              <form noValidate>
                <div className="form-group">
                  <label htmlFor="role">You are</label>
                  <select
                    className="form-input"
                    id="role"
                    required
                    style={{
                      appearance: "none",
                      background:
                        "var(--white) no-repeat right 18px center / 12px url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23141413' stroke-width='2'><polyline points='6 9 12 15 18 9'/></svg>\")",
                      paddingRight: 48,
                    }}
                  >
                    <option>Founder</option>
                    <option>Investor / angel</option>
                    <option>Operator or leader</option>
                    <option>Product or growth</option>
                    <option>Engineer or designer</option>
                    <option>Ambitious employee</option>
                    <option>Something else</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Evening type</label>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {["Dinner", "Coffee", "Drinks", "Lunch"].map((t, i) => (
                      <label
                        key={t}
                        className={`filter-pill${i === 0 ? " is-active" : ""}`}
                        style={{ cursor: "pointer" }}
                      >
                        <input
                          type="radio"
                          name="kind"
                          value={t.toLowerCase()}
                          defaultChecked={i === 0}
                          style={{ display: "none" }}
                        />
                        {t}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <select
                    className="form-input"
                    id="city"
                    required
                    style={{
                      appearance: "none",
                      background:
                        "var(--white) no-repeat right 18px center / 12px url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23141413' stroke-width='2'><polyline points='6 9 12 15 18 9'/></svg>\")",
                      paddingRight: 48,
                    }}
                  >
                    {["Gurgaon", "Delhi", "Bangalore", "Mumbai", "Hyderabad", "Pune"].map(
                      (c) => (
                        <option key={c}>{c}</option>
                      )
                    )}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="week">Preferred week</label>
                  <input className="form-input" id="week" type="week" required />
                </div>

                <div className="form-group">
                  <label htmlFor="who">Who should be at this table?</label>
                  <textarea
                    className="form-input"
                    id="who"
                    rows={4}
                    style={{ borderRadius: "var(--r-lg)", resize: "vertical" }}
                    placeholder="e.g. four founders who've raised a Series A in the last 12 months, plus one or two VCs who lead at Series B"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="why">What should the evening move?</label>
                  <textarea
                    className="form-input"
                    id="why"
                    rows={3}
                    style={{ borderRadius: "var(--r-lg)", resize: "vertical" }}
                    placeholder="e.g. I want honest benchmarks on GTM spend and a shortlist of 2–3 people who could run a ₹5–8L content ops pod"
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    flexWrap: "wrap",
                    marginTop: "2rem",
                  }}
                >
                  <button type="submit" className="btn btn--primary">
                    Send proposal
                    <ArrowRight size={16} weight="regular" />
                  </button>
                  <Link href="/events" className="btn btn--secondary">
                    Browse existing tables
                  </Link>
                </div>
              </form>
            </div>
          </Reveal>

          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "0.8125rem",
              color: "var(--slate)",
              textAlign: "center",
            }}
          >
            Curation capacity is limited each week. We read every proposal.
          </p>
        </div>
      </section>
    </>
  );
}

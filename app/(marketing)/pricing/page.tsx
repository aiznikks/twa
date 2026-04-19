import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle, Plus } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Pricing — simple & free",
  description:
    "Signing up is free. When you join a table, you pay a small per-seat fee that covers food and venue. No subscription.",
};

export default function PricingPage() {
  const faqs = [
    {
      q: "Is there a paid plan I\u2019m missing?",
      a: "No. The account itself stays free. The only thing you pay for is the seat at a specific table, when you accept it.",
    },
    {
      q: "What does the per-seat fee cover?",
      a: "Food, the venue\u2019s hold, and the curation work — we pick the people, the room, and keep the group small. We do not mark up the experience.",
    },
    {
      q: "Can I cancel?",
      a: "Yes. Refunds up to 48 hours before a table. After that, we offer credit for your next seat so the venue\u2019s hold is honoured.",
    },
    {
      q: "Do I pay tax on top?",
      a: "Applicable GST is shown at checkout and included in the total you see before you confirm.",
    },
  ];

  return (
    <>
      <section className="page-hero container">
        <p className="eyebrow page-hero__eyebrow">Pricing</p>
        <Reveal kind="headline" as="h1" className="page-hero__title">
          Simple &amp; free.
        </Reveal>
        <Reveal kind="fade" as="p" className="page-hero__lede">
          Signing up is free. When you join a table, you pay a small per-seat
          fee that covers food and venue. No subscription, no tier, no
          contracts.
        </Reveal>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="pricing-layout">
            <Reveal kind="fade" as="article" className="pricing-card">
              <div className="pricing-portrait">
                <span className="pricing-portrait__label">Free</span>
              </div>
              <div className="pricing-card__body">
                <p className="eyebrow" style={{ marginBottom: "1rem" }}>
                  Your account
                </p>
                <div className="pricing-card__price">
                  ₹0 <span className="sub">/ forever</span>
                </div>
                <p className="pricing-card__desc">
                  Create your account, get curated table invites, accept the
                  ones that fit your week.
                </p>
                <ul className="feature-list">
                  {[
                    "\u201CI\u2019m down\u201D check-ins to surface matching tables",
                    "Friends & discovery matching across cities",
                    "AI-powered recommendations for people worth your evening",
                    "Plan proposals and table acceptances",
                    "Revealed venue and guest list when confirmed",
                  ].map((f) => (
                    <li key={f}>
                      <CheckCircle size={20} weight="regular" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/register" className="btn btn--primary">
                  Create a free account{" "}
                  <ArrowRight size={16} weight="regular" />
                </Link>
              </div>
            </Reveal>

            <div className="pricing-note">
              <strong style={{ color: "var(--ink)", fontWeight: 500 }}>
                Per-table fee
              </strong>{" "}
              · when you join a dinner, drink, or paid lunch, a per-seat amount
              (₹900 – ₹2,200) is charged at confirmation and covers food, the
              venue&apos;s hold, and curation. Coffees hosted by partner cafés
              and select tables are free. You only ever pay for tables you
              actually accept.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(2rem,5vw,3rem)" }}>
            <p className="eyebrow" style={{ display: "inline-flex", justifyContent: "center" }}>
              Common questions
            </p>
            <Reveal kind="headline" as="h2" className="h1">
              <span style={{ marginTop: "1rem", display: "inline-block" }}>
                Before you reserve.
              </span>
            </Reveal>
          </div>

          <Reveal kind="stagger" className="faq">
            {faqs.map((f) => (
              <div key={f.q} className="faq__row">
                <dt className="faq__q">{f.q}</dt>
                <dd className="faq__a">{f.a}</dd>
                <span className="faq__marker" aria-hidden="true">
                  <Plus size={14} weight="regular" />
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}

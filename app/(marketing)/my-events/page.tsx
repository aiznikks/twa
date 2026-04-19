import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "My seats",
  description: "Your confirmed tables and past seats with Two Words Away.",
};

const upcoming = [
  {
    day: "24",
    month: "Apr · Thu",
    title: "Founders of seed-to-Series-A SaaS",
    meta: (
      <>
        8:00 PM ·{" "}
        <strong style={{ color: "var(--ink)", fontWeight: 500 }}>
          Olive Bar &amp; Kitchen
        </strong>
        , Cyber Hub, Gurgaon · 6 confirmed
      </>
    ),
    status: "Confirmed",
    tone: "default" as const,
  },
  {
    day: "30",
    month: "Apr · Wed",
    title: "Sales & GTM leaders, growth stage",
    meta: (
      <>
        7:30 PM ·{" "}
        <strong style={{ color: "var(--ink)", fontWeight: 500 }}>
          Ishaara
        </strong>
        , BKC, Mumbai · 5 confirmed, 1 pending
      </>
    ),
    status: "Confirmed",
    tone: "default" as const,
  },
  {
    day: "02",
    month: "May · Fri",
    title: "VCs, angels, and founders closing this quarter",
    meta: (
      <>
        7:00 PM ·{" "}
        <em style={{ color: "var(--slate)", fontStyle: "normal" }}>
          Venue shared 48 hours before
        </em>{" "}
        · 4 confirmed of 8
      </>
    ),
    status: "Filling",
    tone: "muted" as const,
  },
];

export default function MyEventsPage() {
  return (
    <>
      <section
        className="page-hero container"
        style={{ textAlign: "left" }}
      >
        <p className="eyebrow" style={{ justifyContent: "flex-start" }}>
          Your seats
        </p>
        <Reveal
          kind="headline"
          as="h1"
          className="page-hero__title"
        >
          <span style={{ textAlign: "left", margin: "1rem 0", display: "block" }}>
            Three tables coming up.
          </span>
        </Reveal>
        <Reveal
          kind="fade"
          as="p"
          className="page-hero__lede"
        >
          <span style={{ margin: 0, textAlign: "left", display: "block" }}>
            Venue and guest list revealed at the top of each confirmed seat. We
            send a gentle reminder 24 hours and 2 hours before.
          </span>
        </Reveal>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="tabs" role="tablist" aria-label="Filter by status">
            <button type="button" className="is-active" role="tab" aria-selected>
              Upcoming (3)
            </button>
            <button type="button" role="tab">
              Past (14)
            </button>
            <button type="button" role="tab">
              Waitlist (1)
            </button>
          </div>

          <Reveal kind="stagger" as="div">
            {upcoming.map((u) => (
              <article key={u.day + u.title} className="booked-card">
                <div className="booked-card__date">
                  <span className="booked-card__day">{u.day}</span>
                  <span className="booked-card__month">{u.month}</span>
                </div>
                <div>
                  <h3 className="booked-card__title">{u.title}</h3>
                  <p className="booked-card__meta">{u.meta}</p>
                </div>
                <span
                  className="booked-card__status"
                  style={
                    u.tone === "muted"
                      ? {
                          background: "rgba(20,20,19,0.06)",
                          color: "var(--granite)",
                        }
                      : undefined
                  }
                >
                  {u.status}
                </span>
              </article>
            ))}
          </Reveal>

          <div style={{ marginTop: "clamp(3rem,6vw,5rem)", textAlign: "center" }}>
            <p
              style={{
                color: "var(--slate)",
                fontSize: "0.9375rem",
                marginBottom: "1rem",
              }}
            >
              Want a different kind of room this week?
            </p>
            <Link href="/events" className="btn btn--secondary">
              Browse all tables
              <ArrowRight size={14} weight="regular" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

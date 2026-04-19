import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CaretDown,
  MapPin,
  MagnifyingGlass,
  ForkKnife,
  Coffee,
  Wine,
  Hamburger,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";

type IconComp = React.ComponentType<{ size?: number; weight?: "regular" | "fill"; }>;
const TypeIcon: Record<string, IconComp> = {
  Dinner: ForkKnife,
  Coffee: Coffee,
  Drinks: Wine,
  Lunch: Hamburger,
};

export const metadata: Metadata = {
  title: "Tables this week",
  description:
    "Browse upcoming curated dinners, coffees and drinks with founders, investors and operators across India.",
};

type EventSeed = {
  type: "Dinner" | "Coffee" | "Drinks" | "Lunch";
  price: string;
  priceFree?: boolean;
  date: string;
  title: string;
  whereLead: string;
  whereBold: string;
  whereTail?: string;
  seatsLeft: string;
};

const events: EventSeed[] = [
  {
    type: "Dinner",
    price: "₹1,600",
    date: "Thu · 24 Apr · 8:00 PM",
    title: "Founders of seed-to-Series-A SaaS companies",
    whereLead: "A reservation in ",
    whereBold: "Cyber Hub, Gurgaon",
    whereTail: " · venue shared on confirmation",
    seatsLeft: "3 of 6",
  },
  {
    type: "Coffee",
    price: "Free · host-covered",
    priceFree: true,
    date: "Sat · 26 Apr · 10:30 AM",
    title: "Product leaders, 4–8 yrs into their craft",
    whereLead: "A table in ",
    whereBold: "Indiranagar, Bangalore",
    seatsLeft: "2 of 5",
  },
  {
    type: "Dinner",
    price: "₹1,800",
    date: "Wed · 30 Apr · 7:30 PM",
    title: "Sales & GTM leaders at growth-stage startups",
    whereLead: "A reservation in ",
    whereBold: "BKC, Mumbai",
    seatsLeft: "4 of 6",
  },
  {
    type: "Drinks",
    price: "₹2,200",
    date: "Fri · 2 May · 7:00 PM",
    title: "VCs, angels, and founders who close in the next 90 days",
    whereLead: "A quiet booth near ",
    whereBold: "Khan Market, Delhi",
    seatsLeft: "5 of 8",
  },
  {
    type: "Coffee",
    price: "Free · host-covered",
    priceFree: true,
    date: "Sun · 4 May · 11:00 AM",
    title: "Senior engineers and designers, 6+ yrs in",
    whereLead: "A corner table in ",
    whereBold: "Jubilee Hills, Hyderabad",
    seatsLeft: "6 of 6",
  },
  {
    type: "Lunch",
    price: "₹900",
    date: "Tue · 7 May · 1:00 PM",
    title: "Product & growth practitioners comparing stacks",
    whereLead: "A bistro in ",
    whereBold: "Koregaon Park, Pune",
    seatsLeft: "3 of 5",
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="page-hero container">
        <button type="button" className="city-pill page-hero__eyebrow" aria-label="Change city">
          <MapPin size={14} weight="regular" aria-hidden />
          Gurgaon
          <CaretDown size={11} weight="regular" aria-hidden />
        </button>
        <Reveal kind="headline" as="h1" className="page-hero__title">
          All tables in Gurgaon.
        </Reveal>
        <Reveal kind="fade" as="p" className="page-hero__lede">
          Browse every upcoming dinner, coffee, and drink. Filter by type or
          search to find the table for your week.
        </Reveal>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="events-controls">
            <div className="search-bar" role="search">
              <MagnifyingGlass
                size={18}
                weight="regular"
                className="search-bar__icon"
                aria-hidden
              />
              <input
                type="search"
                placeholder="Search by event, venue or host..."
                aria-label="Search events"
              />
            </div>
            <div className="filter-pills" role="tablist" aria-label="Filter by event type">
              {["All", "Dinner", "Coffee", "Drinks", "Lunch"].map((f, i) => (
                <button
                  key={f}
                  type="button"
                  className={`filter-pill${i === 0 ? " is-active" : ""}`}
                  role="tab"
                  aria-selected={i === 0}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <Reveal kind="stagger" className="events-grid">
            {events.map((e) => {
              const Icon = TypeIcon[e.type] ?? Sparkle;
              return (
                <article key={e.title} className="event-card">
                  <header className="event-card__header">
                    <span className="event-card__type">
                      <Icon size={14} weight="regular" />
                      {e.type}
                    </span>
                    <span className={`event-card__price${e.priceFree ? " event-card__price--free" : ""}`}>
                      {e.priceFree ? (
                        e.price
                      ) : (
                        <>
                          {e.price}{" "}
                          <span style={{ color: "var(--slate)", fontWeight: 400 }}>
                            / seat
                          </span>
                        </>
                      )}
                    </span>
                  </header>
                  <p className="event-card__date">{e.date}</p>
                  <h3 className="event-card__title">{e.title}</h3>
                  <p className="event-card__where">
                    {e.whereLead}
                    <strong>{e.whereBold}</strong>
                    {e.whereTail}
                  </p>
                  <footer className="event-card__footer">
                    <span className="event-card__seats">
                      <strong>{e.seatsLeft}</strong> seats left
                    </span>
                    <Link href="/register" className="event-card__cta">
                      Request a seat
                      <ArrowRight size={14} weight="regular" />
                    </Link>
                  </footer>
                </article>
              );
            })}
          </Reveal>

          <p
            style={{
              textAlign: "center",
              marginTop: "clamp(3rem, 6vw, 5rem)",
              color: "var(--slate)",
              fontSize: "0.9375rem",
            }}
          >
            Nothing fits this week?{" "}
            <Link
              href="/register"
              style={{
                color: "var(--ink)",
                borderBottom: "1px solid var(--signal-light)",
              }}
            >
              Create a free account
            </Link>{" "}
            and we&apos;ll surface tables curated for you.
          </p>
        </div>
      </section>
    </>
  );
}

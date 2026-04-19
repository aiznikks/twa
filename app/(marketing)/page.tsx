import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Quotes,
  Plus,
  PlayCircle,
} from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import HomeMotion from "@/components/HomeMotion";
import SharkTankBadge from "@/components/SharkTankBadge";

const YT_EPISODE = "https://www.youtube.com/watch?v=3JnIxb3myl8&t=3821s";

export default function Home() {
  return (
    <>
      <HomeMotion />

      {/* HERO */}
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero__top">
          <div>
            <div className="hero__eyebrow" aria-label="As seen on Shark Tank India">
              <span className="hero__eyebrow-dot" aria-hidden="true"></span>
              <span>As seen on</span>
              <strong
                style={{
                  color: "var(--ink)",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                }}
              >
                Shark Tank India
              </strong>
            </div>

            <h1 className="hero__headline" id="hero-title">
              A table worth sitting at.
            </h1>

            <p className="hero__lede">
              Curated dinners and coffees with people worth your evening —
              founders, investors, sales leads, engineers, CEOs. We handle the
              table, the venue, and the room. You show up and stay past dessert.
            </p>

            <div className="hero__ctas">
              <Link href="/register" className="btn btn--lg btn--primary">
                Reserve a seat
                <ArrowRight size={18} weight="regular" aria-hidden />
              </Link>
              <Link href="/events" className="btn btn--lg btn--secondary">
                See tables this week
              </Link>
            </div>

            <p className="hero__meta">
              <span>
                Gurgaon · Delhi · Bangalore · Mumbai · Hyderabad · Pune
              </span>
              <a
                href={YT_EPISODE}
                target="_blank"
                rel="noopener"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}
              >
                Watch the episode{" "}
                <ArrowUpRight size={12} weight="regular" aria-hidden />
              </a>
            </p>
          </div>

          <div className="stadium-wrap">
            <SharkTankBadge tone="light" episode="S4 · E14" />
          <figure
            className="stadium"
            aria-label="Founders of Two Words Away on Shark Tank India"
          >
            <Image
              src="/hero-sharktank.jpg"
              alt="Founders of Two Words Away pitching on Shark Tank India, Season 4"
              width={1600}
              height={2000}
              priority
              sizes="(max-width: 960px) 92vw, 44vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <figcaption className="stadium__caption">
              <span className="stadium__caption-title">
                &ldquo;We handle the people, the table, and the venue — you show up and stay past dessert.&rdquo;
              </span>
              <span className="stadium__caption-meta">
                <span>The Pitch · Season 4</span>
                <a href={YT_EPISODE} target="_blank" rel="noopener">
                  <PlayCircle size={14} weight="fill" aria-hidden />
                  Watch
                </a>
              </span>
            </figcaption>
          </figure>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats" aria-label="By the numbers">
        <div className="container">
          <div className="stats__grid">
            <div className="stat">
              <span className="stat__value" data-count="127">
                0<span className="unit">+</span>
              </span>
              <span className="stat__label">Professionals at the table</span>
            </div>
            <div className="stat">
              <span className="stat__value" data-count="63">
                0<span className="unit">+</span>
              </span>
              <span className="stat__label">Tables hosted</span>
            </div>
            <div className="stat">
              <span className="stat__value" data-count="6">
                0
              </span>
              <span className="stat__label">Cities, so far</span>
            </div>
            <div className="stat">
              <span className="stat__value" data-count="97.2" data-decimals="1">
                0<span className="unit">%</span>
              </span>
              <span className="stat__label">Would come back</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section how" id="how" aria-labelledby="how-title">
        <div className="container">
          <div className="how__header">
            <div>
              <Reveal kind="fade" as="p" className="eyebrow">
                The process
              </Reveal>
              <Reveal
                kind="headline"
                as="h2"
                className="h1"
                {...({} as object)}
              >
                <span style={{ display: "block" }}>
                  Three steps, no cold DMs.
                </span>
              </Reveal>
            </div>
            <Reveal kind="fade" as="p" className="how__intro">
              Skip the endless applications, the &quot;just ten minutes&quot;
              coffee asks, and the LinkedIn back-and-forth. We curate a small
              room of people who actually move each other&apos;s work forward,
              then get out of the way.
            </Reveal>
          </div>

          <div className="how__constellation">
            <svg
              className="orbit-layer"
              viewBox="0 0 1200 720"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M 248 156 Q 380 360, 510 240" />
              <path d="M 690 240 Q 820 360, 952 156" />
            </svg>

            {[
              {
                cls: "slot-1 portrait__circle--tinted",
                num: "01",
                step: "Step one",
                title: "Tell us who you are and who\u2019s worth your time.",
                desc: "Two minutes. Your work, what you\u2019re building or hiring for, the kind of room that would move things forward.",
                href: "/register",
              },
              {
                cls: "slot-2 portrait__circle--warm",
                num: "02",
                step: "Step two",
                title: "Pick a table that fits your week.",
                desc: "Dinners, coffees, or a quiet drink. Four to eight seats. Venue shared when you\u2019re confirmed.",
                href: "/events",
              },
              {
                cls: "slot-3 portrait__circle--signal",
                num: "03",
                step: "Step three",
                title: "Show up. Stay past dessert.",
                desc: "Walk into a small group picked for you, not against you. The best tables end with numbers exchanged and plans you didn\u2019t have that morning.",
                href: "/events",
              },
            ].map((s) => {
              const [slotCls, circleCls] = s.cls.split(" ");
              return (
                <div key={s.num} className={`constellation-slot ${slotCls}`}>
                  <div className="portrait">
                    <div className={`portrait__circle ${circleCls}`}>
                      <span className="portrait__num">{s.num}</span>
                    </div>
                    <Link
                      href={s.href}
                      className="satellite portrait__satellite"
                      aria-label={s.step}
                    >
                      <ArrowRight size={22} weight="regular" aria-hidden />
                    </Link>
                    <div className="portrait__meta">
                      <p className="eyebrow">{s.step}</p>
                      <h3 className="portrait__title">{s.title}</h3>
                      <p className="portrait__desc">{s.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="divider" role="presentation" />

      {/* AUDIENCES */}
      <section
        className="section aud surface-lifted"
        id="community"
        aria-labelledby="aud-title"
      >
        <div className="container">
          <div className="aud__header">
            <Reveal kind="fade" as="p" className="eyebrow">
              Who it&apos;s for
            </Reveal>
            <Reveal kind="headline" as="h2" className="h1">
              Every seat means something.
            </Reveal>
            <Reveal
              kind="fade"
              as="p"
              className="lede"
            >
              We don&apos;t build rooms of 200. We build rooms of six, where the
              person across from you was picked for a reason.
            </Reveal>
          </div>

          <div className="aud__constellation">
            <svg
              className="orbit-layer"
              viewBox="0 0 1200 1480"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M 270 120 Q 600 30, 930 180" />
              <path d="M 270 960 Q 600 840, 930 1010" />
              <path d="M 600 700 Q 640 1000, 600 1200" />
            </svg>

            {[
              {
                slot: "aud-1",
                circleCls: "portrait__circle--warm",
                letter: "F",
                eyebrow: "Founders",
                title:
                  "Better rounds, sharper decisions, warm intros that actually move.",
                desc: "Meet VCs after they\u2019ve heard about you, not during. Pick up hires you wouldn\u2019t find on LinkedIn. Avoid mistakes other founders already paid for.",
              },
              {
                slot: "aud-2",
                circleCls: "portrait__circle--tinted",
                letter: "I",
                eyebrow: "Investors & angels",
                title:
                  "High-intent founders, before the round is competitive.",
                desc: "Rounds discussed at the table, not in a deck. Spot the next space before it trends.",
              },
              {
                slot: "aud-3",
                circleCls: "portrait__circle--signal",
                letter: "O",
                eyebrow: "Operators & leaders",
                title:
                  "Faster promotions, better roles, playbooks that show up in review.",
                desc: "Sit with hiring managers, not recruiters. Referrals into teams worth joining. Frameworks that clear your quarter.",
              },
              {
                slot: "aud-4",
                circleCls: "portrait__circle--warm",
                letter: "P",
                eyebrow: "Product & growth",
                title: "Numbers that move. A shorter path to a lead role.",
                desc: "Steal what lifted someone else\u2019s metrics. Be top-of-mind when a new pod gets staffed at a product company you respect.",
              },
              {
                slot: "aud-5",
                circleCls: "portrait__circle--tinted",
                letter: "E",
                eyebrow: "Engineers & designers",
                title:
                  "Higher-paying work. Stronger teams. A real shot at a co-founder.",
                desc: "Shortlist one or two serious co-founder options instead of random coffee chats.",
              },
              {
                slot: "aud-6",
                circleCls: "portrait__circle--signal",
                letter: "A",
                eyebrow: "Ambitious employees",
                title: "Clearer numbers, better titles, a room you belong in.",
                desc: "Honest pay data from the inside. Referrals into teams worth moving for. Future colleagues before you need them.",
              },
            ].map((a) => (
              <div key={a.slot} className={`aud-slot ${a.slot}`}>
                <div className="portrait">
                  <div className={`portrait__circle ${a.circleCls}`}>
                    <span
                      className="portrait__num"
                      style={{ fontSize: "5.5rem" }}
                    >
                      {a.letter}
                    </span>
                  </div>
                  <Link
                    href="/register"
                    className="satellite portrait__satellite"
                    aria-label={a.eyebrow}
                  >
                    <ArrowRight size={22} weight="regular" aria-hidden />
                  </Link>
                  <div className="portrait__meta">
                    <p className="eyebrow">{a.eyebrow}</p>
                    <h3 className="portrait__title">{a.title}</h3>
                    <p className="portrait__desc">{a.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" role="presentation" />

      {/* TESTIMONIALS */}
      <section className="section" aria-labelledby="voices-title">
        <div className="container">
          <div
            style={{
              marginBottom: "clamp(2rem, 5vw, 3.5rem)",
              maxWidth: "44ch",
            }}
          >
            <Reveal kind="fade" as="p" className="eyebrow">
              Around the table
            </Reveal>
            <Reveal kind="headline" as="h2" className="h1">
              What people say after a table.
            </Reveal>
          </div>

          <Reveal kind="stagger" className="quotes">
            {[
              {
                cls: "quote--a",
                initials: "AP",
                text: "I found my current job at one of their tables.",
                name: "Amit Patel",
                meta: "Engineer, Delhi",
              },
              {
                cls: "quote--b",
                initials: "AB",
                text: "I met my co-founder and current startup idea at one of their dinners. Eight months later we\u2019re raising a seed.",
                name: "Aksh B.",
                meta: "Founder, Sales startup, Bangalore",
              },
              {
                cls: "quote--c",
                initials: "RK",
                text: "You walk out with contacts, not just conversations. It\u2019s the only networking thing I actually return to.",
                name: "Rishi Kumar",
                meta: "CEO, SaaS, Mumbai",
              },
              {
                cls: "quote--d",
                initials: "SN",
                text: "Three dinners, two term sheets, one hire. I don\u2019t know how they do the curation — but it works.",
                name: "Sneha N.",
                meta: "Principal, VC fund, Gurgaon",
              },
            ].map((q) => (
              <figure key={q.initials} className={`quote ${q.cls}`}>
                <div className="quote__mark" aria-hidden="true">
                  <Quotes size={42} weight="fill" />
                </div>
                <blockquote className="quote__text">{q.text}</blockquote>
                <figcaption className="quote__byline">
                  <span className="quote__avatar" aria-hidden="true">
                    {q.initials}
                  </span>
                  <span>
                    <span className="quote__name">{q.name}</span> — {q.meta}
                  </span>
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section surface-lifted" aria-labelledby="faq-title">
        <div className="container">
          <div
            style={{
              marginBottom: "clamp(2rem, 5vw, 3rem)",
              maxWidth: "44ch",
            }}
          >
            <Reveal kind="fade" as="p" className="eyebrow">
              Common questions
            </Reveal>
            <Reveal kind="headline" as="h2" className="h1">
              Before you reserve.
            </Reveal>
          </div>

          <Reveal kind="stagger" className="faq">
            {[
              {
                q: "How much does it cost?",
                a: "Signing up is free. When you join a table, you pay a small per-seat fee that covers food and venue. No subscription, no tier.",
              },
              {
                q: "How do you decide who\u2019s at my table?",
                a: "We match on what each person is working on and wants to move. Every seat is picked deliberately; none are filled to round out a number.",
              },
              {
                q: "When do I see the venue and guest list?",
                a: "Once your seat is confirmed. We don\u2019t publicise either — the room is for the people at it.",
              },
              {
                q: "What cities are you in?",
                a: "Gurgaon, Delhi, Bangalore, Mumbai, Hyderabad and Pune today. More quietly added as we find the right hosts.",
              },
              {
                q: "Is this right for me?",
                a: "If you\u2019ve ever wished the introductions from a great dinner would just keep showing up — yes. If you\u2019re here to pitch your deck at strangers — no.",
              },
            ].map((f) => (
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

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="final-cta__frame">
            <Reveal
              kind="fade"
              as="p"
              className="eyebrow"
            >
              Ready when you are
            </Reveal>
            <Reveal kind="headline" as="h2" className="final-cta__title">
              A table that moves you forward — without the cold outreach.
            </Reveal>
            <Reveal kind="fade" as="p" className="final-cta__lede">
              Sign up for free once. We keep curating the right rooms for you,
              quietly, until the week one of them matters.
            </Reveal>
            <Reveal kind="fade" as="div" className="final-cta__ctas">
              <Link href="/register" className="btn btn--primary">
                Reserve a seat
                <ArrowRight size={16} weight="regular" aria-hidden />
              </Link>
              <Link href="/login" className="btn btn--secondary">
                I already have an account
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

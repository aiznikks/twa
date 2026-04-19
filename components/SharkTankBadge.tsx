/**
 * Premium "AS SEEN ON SHARK TANK INDIA" press credit.
 * Custom typographic lockup — no copyrighted logo asset required.
 * Follows Mastercard-style editorial rules: cream pill, ink wordmark,
 * signal-orange fin accent, tracked-out caps.
 */
export default function SharkTankBadge({
  episode = "S4 · E14",
  tone = "light",
}: {
  episode?: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div
      className="st-badge"
      data-tone={tone}
      style={{
        background: isDark ? "rgba(20, 20, 19, 0.72)" : "rgba(255, 255, 255, 0.94)",
        color: isDark ? "var(--canvas)" : "var(--ink)",
        backdropFilter: "blur(14px) saturate(140%)",
        WebkitBackdropFilter: "blur(14px) saturate(140%)",
      }}
    >
      <span className="st-badge__eyebrow">As seen on</span>
      <span className="st-badge__divider" aria-hidden="true" />
      <span className="st-badge__mark" aria-hidden="true">
        {/* Minimal shark silhouette — side view, fin + tail, one-path stroke */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 19 C 8 15, 14 14, 20 15 L 24 10 L 25 15 C 28 16, 30 18, 30 20 C 28 20, 26 20, 24 20 L 22 22 L 18 21 C 14 22, 9 22, 3 20 L 5 19.5 Z"
            fill="currentColor"
          />
          <circle cx="8" cy="18" r="0.9" fill={isDark ? "var(--ink)" : "var(--canvas)"} />
        </svg>
      </span>
      <span className="st-badge__wordmark">
        <strong>Shark Tank</strong> <em>India</em>
      </span>
      <span className="st-badge__divider" aria-hidden="true" />
      <span className="st-badge__episode">{episode}</span>
    </div>
  );
}

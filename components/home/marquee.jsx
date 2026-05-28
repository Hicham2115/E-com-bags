"use client";

const rows = [
  {
    items: [
      "New Collection 2026",
      "Free Worldwide Delivery",
      "Handcrafted by Master Artisans",
      "Buy 2 Get 1 Free",
      "Élégance Sans Effort",
    ],
    reverse: false,
    outerCls: "bg-oria-text text-ivory",
    sepCls: "text-gold opacity-70",
    dur: "36s",
  },
  {
    items: [
      "Every Bag · One Artisan",
      "Forty-Eight Hours per Bag",
      "Lifetime Repairs",
      "Full-Grain Vegetable-Tanned Leather",
      "Established 2019",
    ],
    reverse: true,
    outerCls: "bg-gold text-oria-text",
    sepCls: "text-oria-text opacity-40",
    dur: "42s",
  },
];

const Diamond = ({ cls }) => (
  <svg
    width="7"
    height="7"
    viewBox="0 0 7 7"
    fill="currentColor"
    className={`shrink-0 ${cls}`}
  >
    <path d="M3.5 0 L7 3.5 L3.5 7 L0 3.5 Z" />
  </svg>
);

export function Marquee() {
  return (
    <div>
      {rows.map((row, ri) => (
        <div
          key={ri}
          className={`overflow-hidden group ${row.outerCls}`}
        >
          <div
            className="flex whitespace-nowrap py-2"
            style={{
              animation: `marqueeMove ${row.dur} linear infinite`,
              animationDirection: row.reverse ? "reverse" : "normal",
              animationPlayState: "running",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.animationPlayState = "paused")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.animationPlayState = "running")
            }
          >
            {[...row.items, ...row.items, ...row.items].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-8 px-8 font-serif text-[clamp(17px,2vw,28px)] tracking-wide"
              >
                {item}
                <Diamond cls={row.sepCls} />
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

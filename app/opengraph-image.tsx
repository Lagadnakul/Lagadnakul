import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} - Full Stack Developer and M.Tech researcher`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "#10b981";
const INK = "#0a0a0a";
const MUTED = "#666666";
const BORDER = "#e8e8e8";

/**
 * Social card, rendered at build time. Satori (behind ImageResponse) supports a
 * narrow subset of CSS: every element with more than one child needs an explicit
 * display value, and there is no grid.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Accent rule along the top edge */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 10,
            backgroundColor: ACCENT,
          }}
        />

        {/* Dot field, bottom right. Drawn as absolutely positioned squares
            because Satori has no background-image pattern support. */}
        {Array.from({ length: 7 * 14 }).map((_, i) => {
          const col = i % 14;
          const row = Math.floor(i / 14);
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                right: 76 + col * 26,
                // Kept clear of the footer rule so the dots never sit behind text.
                bottom: 196 + row * 26,
                width: 4,
                height: 4,
                borderRadius: 2,
                backgroundColor: ACCENT,
                opacity: 0.22,
              }}
            />
          );
        })}

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 24,
              color: MUTED,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: ACCENT,
              }}
            />
            <div>{profile.status}</div>
          </div>

          <div
            style={{
              marginTop: 34,
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: INK,
              lineHeight: 1.05,
            }}
          >
            {profile.name}
          </div>

          {/* Satori needs an explicit display on any element with more than one
              child, and this line mixes text with a coloured span. */}
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 38,
              color: MUTED,
              letterSpacing: "-0.02em",
              lineHeight: 1.3,
            }}
          >
            <span>I build web systems and study how they&nbsp;</span>
            <span style={{ color: ACCENT, fontWeight: 700 }}>fail</span>
            <span>.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `2px solid ${BORDER}`,
            paddingTop: 28,
            fontSize: 24,
            color: MUTED,
          }}
        >
          <div style={{ display: "flex", gap: 28 }}>
            <div>React</div>
            <div>Next.js</div>
            <div>Node</div>
            <div>MongoDB</div>
            <div>Agentic AI</div>
          </div>
          <div style={{ color: INK, fontWeight: 600 }}>github.com/Lagadnakul</div>
        </div>
      </div>
    ),
    size,
  );
}

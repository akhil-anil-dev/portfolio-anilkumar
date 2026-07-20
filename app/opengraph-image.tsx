import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

/**
 * Social-share preview image (1200 × 630) shown by LinkedIn, WhatsApp,
 * Slack, X/Twitter, iMessage, etc. when the URL is pasted.
 *
 * Next.js auto-detects this file and wires the `og:image` +
 * `twitter:image` meta tags for the entire site.
 */

export const runtime = "edge";
export const alt = `${profile.shortName} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0B1633 0%, #142036 55%, #1E293B 100%)",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative blue radial glow, top-right */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -160,
            width: 640,
            height: 640,
            borderRadius: 320,
            background:
              "radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, rgba(37, 99, 235, 0) 70%)",
          }}
        />

        {/* Top row: PORTFOLIO eyebrow + NJ monogram */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 8,
              color: "#94A3B8",
              fontWeight: 600,
            }}
          >
            PORTFOLIO
          </div>
          <div
            style={{
              display: "flex",
              width: 68,
              height: 68,
              borderRadius: 12,
              background: "#2563EB",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            NJ
          </div>
        </div>

        {/* Middle: name + accent + role */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 108,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1,
              color: "white",
            }}
          >
            {profile.shortName.toUpperCase()}
          </div>

          <div
            style={{
              width: 96,
              height: 6,
              background: "#2563EB",
              marginTop: 28,
              borderRadius: 3,
            }}
          />

          <div
            style={{
              fontSize: 38,
              fontWeight: 700,
              marginTop: 28,
              letterSpacing: 2,
              color: "white",
            }}
          >
            MEP BIM COORDINATOR
          </div>
        </div>

        {/* Bottom: quick credentials strip */}
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#CBD5E1",
            gap: 20,
            alignItems: "center",
          }}
        >
          <div>7+ years of experience</div>
          <div style={{ color: "#3B82F6" }}>·</div>
          <div>Revit · Navisworks · Dynamo</div>
          <div style={{ color: "#3B82F6" }}>·</div>
          <div>Malta · GCC · India</div>
        </div>
      </div>
    ),
    { ...size }
  );
}

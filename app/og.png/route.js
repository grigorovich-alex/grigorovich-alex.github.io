import { ImageResponse } from "next/og";
import { getContent } from "@/content";

const { site, heroStack } = getContent("en");

export const dynamic = "force-static";

// Static Open Graph image, emitted as /og.png so GitHub Pages serves it with the right content type.
const size = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#fafafa",
          color: "#0b0c0e",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#4338ca", letterSpacing: 2 }}>
          {site.roles.join(" · ").toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ fontSize: 30, color: "#5b616e", marginTop: 20, maxWidth: 980, lineHeight: 1.4 }}>
            {site.positioning}
          </div>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {heroStack.slice(0, 7).map((t) => (
            <div
              key={t}
              style={{ display: "flex", border: "1px solid #cfd3da", borderRadius: 999, padding: "8px 18px", fontSize: 22, color: "#5b616e" }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}

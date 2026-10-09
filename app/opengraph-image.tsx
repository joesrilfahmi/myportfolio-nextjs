import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social preview card, generated at build time (no extra dependency). */
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 96,
        position: "relative",
        background: "linear-gradient(135deg, #18181b 0%, #27272a 100%)",
        color: "#fafafa",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: 24,
          background:
            "linear-gradient(180deg, #4285f4 0%, #6366f1 50%, #8b5cf6 100%)",
        }}
      />
      <div style={{ fontSize: 34, color: "#8ab4f8", fontWeight: 600 }}>
        Portfolio
      </div>
      <div style={{ fontSize: 96, fontWeight: 700, marginTop: 16 }}>
        {siteConfig.name}
      </div>
      <div style={{ fontSize: 42, color: "#a1a1aa", marginTop: 20 }}>
        Fullstack &amp; Mobile Developer
      </div>
    </div>,
    size,
  );
}

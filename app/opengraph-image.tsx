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
        background: "#2a2d35",
        color: "#e6ecf8",
      }}
    >
      <div style={{ fontSize: 34, color: "#8fb0f7", fontWeight: 600 }}>
        Portfolio
      </div>
      <div style={{ fontSize: 96, fontWeight: 700, marginTop: 16 }}>
        {siteConfig.name}
      </div>
      <div style={{ fontSize: 42, color: "#a3adbd", marginTop: 20 }}>
        Fullstack &amp; Mobile Developer
      </div>
    </div>,
    size,
  );
}

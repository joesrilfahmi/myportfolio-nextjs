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
        background: "#292729",
        color: "#f1eae8",
        borderLeft: "24px solid #e85d52",
      }}
    >
      <div style={{ fontSize: 34, color: "#ff9389", fontWeight: 600 }}>
        Portfolio
      </div>
      <div style={{ fontSize: 96, fontWeight: 700, marginTop: 16 }}>
        {siteConfig.name}
      </div>
      <div style={{ fontSize: 42, color: "#b5a9a6", marginTop: 20 }}>
        Fullstack &amp; Mobile Developer
      </div>
    </div>,
    size,
  );
}

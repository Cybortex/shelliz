import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #0b4f6c 0%, #062a3a 100%)",
          color: "#fff6f9",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "3px solid #c9a45c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              color: "#c9a45c",
            }}
          >
            SE
          </div>
          <span style={{ fontSize: "28px", letterSpacing: "4px", color: "#f9d5e1" }}>
            SHEILLZ EMPIRE
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1 style={{ fontSize: "64px", margin: 0, fontWeight: 700, color: "#fff6f9" }}>
            {siteConfig.heroHeadline}
          </h1>
          <p style={{ fontSize: "28px", margin: 0, color: "#f9d5e1", maxWidth: "900px", fontFamily: "sans-serif" }}>
            {siteConfig.heroSubline}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(201, 164, 92, 0.4)",
            paddingTop: "24px",
            fontFamily: "sans-serif",
            fontSize: "20px",
            color: "#c9a45c",
          }}
        >
          <span>Spa & Salon • Garki, Abuja</span>
          <span>{siteConfig.contact.instagramHandle}</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

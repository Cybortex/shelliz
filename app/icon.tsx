import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 260,
          background: "#0b4f6c",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#c9a45c",
          fontFamily: "serif",
          fontWeight: "bold",
          border: "16px solid #c9a45c",
          borderRadius: "999px",
        }}
      >
        <span style={{ color: "#fff6f9" }}>S</span>
        <span style={{ color: "#f9d5e1", marginLeft: -30 }}>E</span>
      </div>
    ),
    {
      ...size,
    }
  );
}

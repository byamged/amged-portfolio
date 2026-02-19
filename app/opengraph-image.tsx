import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d1117",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 70, fontWeight: 700 }}>
          Amged
        </div>

        <div
          style={{
            fontSize: 36,
            marginTop: 20,
            color: "#8b949e",
          }}
        >
          Software Engineer
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 24,
            color: "#58a6ff",
          }}
        >
          amged-portfolio-gamma.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

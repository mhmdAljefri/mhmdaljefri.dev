import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Mohammed Aljefri";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "-.02em",
          fontWeight: 700,
          background: "white",
        }}
      >
        <div
          style={{
            left: 42,
            top: 42,
            position: "absolute",
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            width="40"
            height="40"
          >
            <rect x="0" y="0" width="20" height="40" fill="white" />
            <rect x="20" y="0" width="20" height="40" fill="black" />
          </svg>
          <span
            style={{
              marginLeft: 8,
              fontSize: 20,
            }}
          >
            mhmdaljefri.dev
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "20px 50px",
            margin: "0 42px",
            fontSize: 40,
            width: "auto",
            maxWidth: 550,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Making the Web. Faster.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

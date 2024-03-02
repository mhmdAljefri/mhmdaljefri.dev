import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        style={{ borderRadius: 32 }}
      >
        <rect x="0" y="0" width="16" height="32" fill="white" />
        <rect x="16" y="0" width="16" height="32" fill="black" />
      </svg>
    ),
    {
      ...size,
    }
  );
}

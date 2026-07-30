import { ImageResponse } from "next/og";

export const alt =
  "Solyon Technologies — risk intelligence infrastructure for commercial trucking";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage({ params }) {
  const es = params.locale === "es";
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#070809",
          color: "#f4f2ec",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px 72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            display: "flex",
            inset: 0,
            position: "absolute",
          }}
        />
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "18px",
            position: "relative",
          }}
        >
          <svg fill="none" height="46" viewBox="0 0 42 42" width="46">
            <circle cx="21" cy="12.5" r="9.5" stroke="#d7ad61" strokeWidth="1.6" />
            <circle cx="13" cy="26.5" r="9.5" stroke="#d7ad61" strokeWidth="1.6" />
            <circle cx="29" cy="26.5" r="9.5" stroke="#d7ad61" strokeWidth="1.6" />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 19,
              fontWeight: 600,
              letterSpacing: "0.19em",
              textTransform: "uppercase",
            }}
          >
            SOLYON TECHNOLOGIES
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "960px",
            position: "relative",
          }}
        >
          <div
            style={{
              color: "#d7ad61",
              display: "flex",
              fontSize: 14,
              letterSpacing: "0.19em",
              marginBottom: "26px",
              textTransform: "uppercase",
            }}
          >
            MEDELLÍN → U.S. COMMERCIAL TRUCKING
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 520,
              letterSpacing: "-0.055em",
              lineHeight: 1,
            }}
          >
            {es
              ? "Infraestructura de inteligencia de riesgo."
              : "Risk intelligence infrastructure."}
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,.12)",
            color: "#92999f",
            display: "flex",
            fontSize: 15,
            justifyContent: "space-between",
            paddingTop: "24px",
            position: "relative",
          }}
        >
          <span>Applied AI · structured data · operating systems</span>
          <span style={{ color: "#d7ad61" }}>solyontechnologies.com</span>
        </div>
      </div>
    ),
    size,
  );
}

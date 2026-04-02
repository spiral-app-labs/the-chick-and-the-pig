import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #3E2723 0%, #5D4037 40%, #3E2723 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(212, 165, 23, 0.15)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "-30px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(198, 40, 40, 0.1)",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #C62828, #D4A517, #C62828)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              color: "#D4A517",
              letterSpacing: "8px",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Algonquin, Illinois
          </div>

          <div
            style={{
              fontSize: "80px",
              fontWeight: 900,
              color: "white",
              lineHeight: 0.95,
              textAlign: "center",
              letterSpacing: "-2px",
            }}
          >
            THE CHICK
          </div>
          <div
            style={{
              fontSize: "40px",
              color: "#D4A517",
              fontWeight: 700,
            }}
          >
            &
          </div>
          <div
            style={{
              fontSize: "80px",
              fontWeight: 900,
              color: "white",
              lineHeight: 0.95,
              letterSpacing: "-2px",
            }}
          >
            THE PIG
          </div>

          <div
            style={{
              fontSize: "18px",
              color: "rgba(255,248,231,0.7)",
              letterSpacing: "4px",
              marginTop: "12px",
            }}
          >
            SAVORY FRIED CHICKEN & BBQ
          </div>

          {/* Address */}
          <div
            style={{
              fontSize: "16px",
              color: "rgba(255,248,231,0.5)",
              marginTop: "8px",
            }}
          >
            1000 N Main St, Algonquin, IL
          </div>

          {/* Rating */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "16px",
              background: "rgba(212, 165, 23, 0.15)",
              padding: "8px 24px",
              borderRadius: "50px",
              border: "1px solid rgba(212, 165, 23, 0.3)",
            }}
          >
            <div style={{ fontSize: "22px", color: "#D4A517" }}>
              ★★★★☆
            </div>
            <div style={{ fontSize: "18px", color: "white", fontWeight: 700 }}>
              4.4
            </div>
            <div style={{ fontSize: "14px", color: "rgba(255,248,231,0.6)" }}>
              • 210+ Google Reviews
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #D4A517, #C62828, #D4A517)",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

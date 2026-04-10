import { ImageResponse } from "@vercel/og";
import { personalityTypes } from "@/data/types";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const typeId = searchParams.get("type") || "impostor";
  const type = personalityTypes[typeId] || personalityTypes["impostor"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at center, ${type.color}22 0%, transparent 70%)`,
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "40px 60px",
            position: "relative",
          }}
        >
          {/* Header */}
          <div
            style={{
              fontSize: 16,
              letterSpacing: "4px",
              color: "#666",
              textTransform: "uppercase",
              marginBottom: 24,
              fontFamily: "monospace",
              display: "flex",
            }}
          >
            DEVBUG PERSONALITY TEST
          </div>

          {/* Emoji */}
          <div style={{ fontSize: 100, marginBottom: 16, display: "flex" }}>
            {type.emoji}
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 52,
              fontWeight: 900,
              color: type.color,
              marginBottom: 6,
              display: "flex",
            }}
          >
            {type.name}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 18,
              color: "#666",
              marginBottom: 20,
              fontFamily: "monospace",
              display: "flex",
            }}
          >
            {type.subtitle}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 22,
              color: "#ccc",
              textAlign: "center",
              maxWidth: 580,
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            {type.description}
          </div>

          {/* Traits */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 24,
            }}
          >
            {type.traits.map((trait) => (
              <div
                key={trait}
                style={{
                  padding: "6px 16px",
                  borderRadius: 999,
                  fontSize: 15,
                  color: type.color,
                  border: `1px solid ${type.color}66`,
                  display: "flex",
                }}
              >
                {trait}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

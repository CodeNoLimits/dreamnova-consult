import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Dream Nova Consult — Agence IA pour Entrepreneurs"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #06060C 0%, #0D0D16 50%, #12121E 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            opacity: 0.1,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Gold accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #D4AF37, #F5D77A, #D4AF37)",
          }}
        />

        {/* Logo / Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #D4AF37, #F5D77A)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 800,
              color: "#06060C",
            }}
          >
            DN
          </div>
          <div style={{ fontSize: "32px", fontWeight: 700, color: "#F0F0F5" }}>
            Dream Nova Consult
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "48px",
            fontWeight: 700,
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.2,
            display: "flex",
          }}
        >
          <span style={{ color: "#F0F0F5" }}>Agence IA pour </span>
          <span
            style={{
              background: "linear-gradient(135deg, #D4AF37, #F5D77A)",
              backgroundClip: "text",
              color: "transparent",
              marginLeft: "12px",
            }}
          >
            Entrepreneurs
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "20px",
            color: "#9898B0",
            marginTop: "16px",
            textAlign: "center",
            maxWidth: "700px",
          }}
        >
          Sites web premium · Automatisation · Marketing digital · Formation IA
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            marginTop: "40px",
          }}
        >
          {[
            { num: "63+", label: "Projets" },
            { num: "98%", label: "Satisfaction" },
            { num: "10+", label: "Pays" },
          ].map((s) => (
            <div
              key={s.label}
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #D4AF37, #F5D77A)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {s.num}
              </div>
              <div style={{ fontSize: "14px", color: "#9898B0" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            fontSize: "14px",
            color: "#5C5C78",
          }}
        >
          dreamnova-consult.vercel.app
        </div>
      </div>
    ),
    { ...size }
  )
}

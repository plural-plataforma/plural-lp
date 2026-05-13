import { ImageResponse } from "next/og";

export const alt = "Plural Plataforma — A 1ª plataforma exclusiva para professoras do AEE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1b4a57 0%, #276678 50%, #3a9ab8 100%)",
          padding: "80px 96px",
          position: "relative",
        }}
      >
        {/* Círculo decorativo direita */}
        <div
          style={{
            position: "absolute",
            right: -120,
            top: "50%",
            transform: "translateY(-50%)",
            width: 560,
            height: 560,
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.12)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -60,
            top: "50%",
            transform: "translateY(-50%)",
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.18)",
            display: "flex",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(255,255,255,0.12)",
            borderRadius: 999,
            padding: "10px 22px",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#FFBE33",
              display: "flex",
            }}
          />
          <span
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            A 1ª plataforma exclusiva para professoras do AEE
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            marginBottom: 36,
          }}
        >
          <span
            style={{
              color: "#ffffff",
              fontSize: 72,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-1px",
            }}
          >
            Sua rotina no AEE
          </span>
          <span
            style={{
              color: "#FFBE33",
              fontSize: 72,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-1px",
            }}
          >
            muito mais leve
          </span>
        </div>

        {/* Subtítulo */}
        <span
          style={{
            color: "rgba(255,255,255,0.70)",
            fontSize: 28,
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: 680,
          }}
        >
          PAEE, Avaliação Diagnóstica, Banco de Habilidades e relatórios em um só lugar.
        </span>

        {/* URL rodapé */}
        <div
          style={{
            position: "absolute",
            bottom: 52,
            left: 96,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 36,
              height: 4,
              background: "#FFBE33",
              borderRadius: 2,
              display: "flex",
            }}
          />
          <span
            style={{
              color: "rgba(255,255,255,0.50)",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            pluralplataforma.com
          </span>
        </div>
      </div>
    ),
    size
  );
}

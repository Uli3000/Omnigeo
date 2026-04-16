import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'OmniGeo — Estudia geografía mundial'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0f',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #1a1a3e 0%, transparent 70%)',
            top: -100,
            right: -100,
          }}
        />

        <div style={{ fontSize: 80, marginBottom: 24 }}>🌍</div>

        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-2px',
            marginBottom: 16,
          }}
        >
          OmniGeo
        </div>

        <div
          style={{
            fontSize: 28,
            color: 'rgba(255,255,255,0.5)',
            marginBottom: 40,
          }}
        >
          Estudia y practica geografía mundial
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          {['Modo Estudio', 'Quiz Interactivo', 'AI Coach'].map((label) => (
            <div
              key={label}
              style={{
                background: 'rgba(55, 138, 221, 0.15)',
                border: '1px solid rgba(55, 138, 221, 0.3)',
                borderRadius: 99,
                padding: '8px 20px',
                color: '#378ADD',
                fontSize: 18,
              }}
            >
              {label}
            </div>
          ))}
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 32,
            color: 'rgba(255,255,255,0.2)',
            fontSize: 18,
          }}
        >
          omni-geo.vercel.app
        </div>
      </div>
    ),
    { ...size }
  )
}
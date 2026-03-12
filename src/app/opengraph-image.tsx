import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Shane Delaney, Platform Content Strategist';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Top: site label */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ color: '#9ca3af', fontSize: '15px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            shanedelaney.xyz
          </span>
        </div>

        {/* Middle: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              color: '#111827',
              fontSize: '68px',
              fontWeight: '600',
              lineHeight: '1.04',
              letterSpacing: '-0.03em',
            }}
          >
            Editorial operations<br />and content strategy.
          </div>
          <div style={{ color: '#9ca3af', fontSize: '22px', fontWeight: '400' }}>
            Content Marketing · Meta · Los Angeles, CA
          </div>
        </div>

        {/* Bottom: name */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ color: '#374151', fontSize: '18px', fontWeight: '600' }}>Shane Delaney</span>
          <div style={{ display: 'flex', gap: '8px' }}>
            {['Meta', 'Snap Inc.', 'Collider', 'StockX'].map((co) => (
              <span
                key={co}
                style={{
                  color: '#6b7280',
                  fontSize: '13px',
                  background: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  padding: '4px 12px',
                  borderRadius: '999px',
                }}
              >
                {co}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

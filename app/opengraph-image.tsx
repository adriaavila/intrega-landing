import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'INTEGRA'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#4A4063',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        fontSize: 120,
                        fontWeight: 800,
                        color: 'white',
                        letterSpacing: '-0.05em',
                        marginBottom: 20,
                    }}
                >
                    INTEGRA
                </div>
                <div
                    style={{
                        fontSize: 32,
                        color: 'rgba(255, 255, 255, 0.8)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontWeight: 500,
                    }}
                >
                    Hospitalidad & Retail
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}

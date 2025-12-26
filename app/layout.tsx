import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Guía para Canal de YouTube Geek y Cultura Popular Rentable',
  description: 'Todo lo necesario para crear y monetizar tu canal de YouTube dedicado a la cultura geek y popular',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

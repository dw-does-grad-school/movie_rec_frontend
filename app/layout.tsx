import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Movie Recommender',
  description: 'Get the perfect movie recommendation',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  )
}

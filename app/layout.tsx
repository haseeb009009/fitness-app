import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FitGuide',
  description: 'The Fitness App is a modern web application designed to help users track their fitness goals, monitor progress, and stay motivated.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  )
}
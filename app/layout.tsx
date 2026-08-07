import type { Metadata, Viewport } from "next"
import { Fraunces, Nunito_Sans } from "next/font/google"
import "./globals.css"

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["SOFT", "WONK"],
})

const body = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Pode Ser Bolo? | Fatias de Bolos e Tortas em Marília",
  description:
    "Descubra onde encontrar a Pode Ser Bolo? hoje em Marília, confira horários, sabores e a rota da semana.",
  robots: { index: false, follow: false, nocache: true },
  openGraph: {
    title: "Pode Ser Bolo? | Fatias generosas em Marília",
    description: "Veja onde encontrar a Pode Ser Bolo? hoje, os horários e a rota da semana.",
    type: "website",
    locale: "pt_BR",
    siteName: "Pode Ser Bolo?",
    images: [{ url: "/og.png", width: 1729, height: 910, alt: "Pode Ser Bolo? — Fatias generosas em Marília" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pode Ser Bolo? | Fatias generosas em Marília",
    description: "Veja onde encontrar a Pode Ser Bolo? hoje, os horários e a rota da semana.",
    images: ["/og.png"],
  },
  icons: { icon: "/images/logo-pode-ser-bolo.png", apple: "/images/logo-pode-ser-bolo.png" },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#643c2a",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`bg-background ${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

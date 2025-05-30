import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Besh Vaqt Namoz",
  description: "Besh vaqt namoz to'liq tartibi",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}

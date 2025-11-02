import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Navbar } from "@/Components/Layout/Navbar"
import { Footer } from "@/Components/Layout/Footer"
import { AuthProviderWrapper } from "@/Components/Providers/AuthProviderWrapper"

import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI HIRE - Revolutionizing Recruitment",
  description: "AI-Powered Solution to streamline recruitment",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <AuthProviderWrapper>
          <Navbar />
          {children}
          <Footer />
        </AuthProviderWrapper>
      </body>
    </html>
  )
}

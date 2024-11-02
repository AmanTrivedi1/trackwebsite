import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Providers } from "../components/providers"

import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Tracker",
  description: "Created using jStack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${poppins.className} bg-brand-50 min-h-[calc(100vh-1px)] flex flex-col text-brand-950 antialiased`}
        >
          <main className="relative flex flex-1 flex-col">
            <Providers>{children}</Providers>
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}

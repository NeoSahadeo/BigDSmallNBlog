import type { Metadata } from "next"
import { Zilla_Slab } from "next/font/google"
import { Roboto_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const zilla_slab = Zilla_Slab({
  weight: "300",
  subsets: ["latin"],
})
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
})

export const metadata: Metadata = {
  title: "Big D Small N",
  description: "Damian and Neo's Blog site.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${zilla_slab.className} dark:text-gray-300`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="flex flex-col h-screen gap-5">
            <Header />
            <section className="grow flex justify-center overflow-auto">
              {children}
            </section>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

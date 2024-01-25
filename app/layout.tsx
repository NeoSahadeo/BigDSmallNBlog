import type { Metadata } from "next"
import { Chakra_Petch, Maven_Pro, Overpass_Mono, Play } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const overpass_mono = Overpass_Mono({ weight: "400", subsets: ["latin"] })
const play = Play({ weight: "400", subsets: ["latin"] })
const chakra_petch = Chakra_Petch({ weight: "400", subsets: ["latin"] })
const maven_pro = Maven_Pro({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Big D Small N",
  description: "Damian and Neo's Blog site.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${maven_pro.className} dark:text-gray-300`}>
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

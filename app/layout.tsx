import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { CookieConsent } from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Casas Pinheirão - Especialista em Casas Pré-Fabricadas",
    template: "%s | Casas Pinheirão",
  },
  description:
    "Casas Pinheirão: Especialista em casas pré-fabricadas de madeira e alvenaria em Curitiba e Região. Mais de 20 anos de tradição e qualidade. Financiamento facilitado.",
  keywords: [
    "casas pré-fabricadas",
    "casas de madeira",
    "casas de alvenaria",
    "sobrados",
    "casas Pinhais",
    "casas Curitiba",
    "casa própria Pinhais",
    "financiamento casa",
  ],
  authors: [{ name: "Casas Pinheirão" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://casaspinheirao.com.br",
    siteName: "Casas Pinheirão",
    title: "Casas Pinheirão - Realize o Sonho da Casa Própria",
    description:
      "Especialista em casas pré-fabricadas de madeira e alvenaria em Curitiba e Região. Mais de 20 anos de tradição.",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0bb597",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <CookieConsent />
        </div>
      </body>
    </html>
  )
}

import { Providers } from "@/src/app/providers"
import { Layout } from "@/src/app/ui/Layout"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./global.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Watchlists",
  description:
    "This website is an interactive platform for creating lists of favorite movies. Users can find their favorite movies, learn the most important information about them (rating, cast, duration, and more), and add movies to their watchlists. The Movie Database (TMDb) API is used to obtain information about movies.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Layout
            isSidebarOpen={false}
            header={<div>HeaderNavbar</div>}
            sidebar={<div>Sidebar</div>}
            page={children}
            footer={<div>FooterNavbar</div>}
          />
        </Providers>
      </body>
    </html>
  )
}

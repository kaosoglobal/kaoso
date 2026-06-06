import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kaoso Global Services - Business Compliance & Registration Solutions',
  description: 'Your Trusted Business Partner. Helping entrepreneurs, startups, SMEs, manufacturers, traders and growing businesses manage registrations, compliance, taxation and strategic growth.',
  keywords: 'business registration, GST compliance, company registration, LLP registration, business consulting, taxation, compliance management',
  authors: [{ name: 'Kaoso Global Services Private Limited' }],
  creator: 'Kaoso Global Services',
  publisher: 'Kaoso Global Services',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kaoso.in',
    title: 'Kaoso Global Services - Business Compliance & Registration Solutions',
    description: 'Your Trusted Business Partner for all your business compliance and registration needs.',
    images: [
      {
        url: 'https://kaoso.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kaoso Global Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaoso Global Services',
    description: 'Your Trusted Business Partner',
    images: ['https://kaoso.in/twitter-image.png'],
  },
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://kaoso.in" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-dark-900 text-dark-900 dark:text-white transition-colors duration-300`}>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

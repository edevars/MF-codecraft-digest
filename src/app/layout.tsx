import { Inter } from 'next/font/google'
import 'app/styles/globals.css'

const font = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Codecraft Digest',
  description: 'Stay ahead in tech with curated articles, coding tips, industry updates, and exclusive resources.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}

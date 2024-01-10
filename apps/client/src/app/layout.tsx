
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navBar'
import RecoidContextProvider from '@/providers/recoilContextProvider'
import GetUser from '@/components/getUser'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoidContextProvider>
          <NavBar />
          <GetUser />
          {children}
        </RecoidContextProvider>
      </body>
    </html>
  )
}

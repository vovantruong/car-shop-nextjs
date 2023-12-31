import Head from 'next/head'
import './globals.css'
import { Footer, Navbar } from '@/components'

export const metadata = {
    title: 'Car Hub',
    description: 'Discover the best car in the world.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className='relative' suppressHydrationWarning={true}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}

import LayoutClient from '@/components/layout/layout'
import type { Metadata } from 'next'
import { Inter, Rubik } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const rubik = Rubik({ subsets: ['latin'] })
// const geist = GeistSans({variable: '--font-geist'})
export const metadata: Metadata = {
	title: 'wiju.dev',
	description: 'Personal portfolio',
	// icons: 'favicon.ico',
	icons: { icon: 'favicon.ico' },
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={rubik.className}>
				<LayoutClient>{children}</LayoutClient>
			</body>
		</html>
	)
}

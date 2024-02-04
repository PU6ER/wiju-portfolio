'use client'

import NavbarDesktop from '@/components/ui/navbar/navbar-desktop/NavbarDesktop'
import NavbarMobile from '@/components/ui/navbar/navbar-mobile/NavbarMobile'

export default function Header() {
	return (
		<header className=''>
			<NavbarMobile />
			<NavbarDesktop />

			<hr className='h-px w-full border-t border-blue-600' />
		</header>
	)
}

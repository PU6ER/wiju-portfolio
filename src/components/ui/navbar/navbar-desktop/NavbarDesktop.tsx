'use client'

import styles from './NavbarDesktop.module.scss'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'
import Link from 'next/link'

export default function NavbarDesktop() {
	return (
		<div className='hidden lg:flex w-screen flex-col justify-center items-center px-3'>
			<nav className={styles.navbar}>
				<div className='flex flex-row gap-2'>
					<Image alt='logo' src='logo.svg' width={30} height={20} />
					<div className=''>
						<span className=''>wiju</span>
						<span className=' text-green-500'>.dev</span>
					</div>
				</div>
				<div className={styles.links}>
					<Link href='/blog'>Blog</Link>
					<Link href='/blog'>Portfolio</Link>
					<Link href='/blog'>Portfolio</Link>
					<Link href='/blog'>Portfolio</Link>
				</div>
				<DropdownMenu>
					<DropdownMenuTrigger className={styles.dropdown}>
						Contacts
					</DropdownMenuTrigger>
					<DropdownMenuContent onCloseAutoFocus={e => e.preventDefault()}>
						<DropdownMenuLabel>Contacts</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Telegram</DropdownMenuItem>
						<DropdownMenuItem>Github</DropdownMenuItem>
						<DropdownMenuItem>Email</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</nav>
		</div>
	)
}

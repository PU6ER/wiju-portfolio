'use client'

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
import styles from './Navbar.module.scss'

interface INavbar {}

export default function Navbar({}: INavbar) {
	return (
		<header className='w-screen flex flex-col justify-center items-center'>
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
			<hr className='h-px w-full border-t border-blue-600' />
		</header>
	)
}

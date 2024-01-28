// 'use client'

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
		<nav className={styles.navbar}>
			<Image alt='logo' src='logo.svg' width={30} height={20} />
			<div className={styles.links}>
				<Link href='/blog'>Blog</Link>
				<Link href='/blog'>Portfolio</Link>
				<DropdownMenu>
					<DropdownMenuTrigger className={styles.dropdown}>
						Contacts
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>Contacts</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Telegram</DropdownMenuItem>
						<DropdownMenuItem>Github</DropdownMenuItem>
						<DropdownMenuItem>Email</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</nav>
	)
}

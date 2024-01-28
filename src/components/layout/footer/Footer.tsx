import { FileSearch, Github, Mail, MapPin, Phone, Send } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.scss'

export default function Footer() {
	return (
		<footer className='h-[150px] w-full flex flex-col  items-center overflow-x-hidden'>
			<hr className='h-px w-full  border-top border-blue-600' />
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
				<div className='flex'>
					<div className='bg-primary p-1 rounded-lg cursor-pointer'>
						<Github />
					</div>
					<div className='bg-primary p-1 rounded-lg cursor-pointer ml-3'>
						<Send />
					</div>
					<div className='bg-primary p-1 rounded-lg cursor-pointer ml-3'>
						<FileSearch />
					</div>
				</div>
			</nav>
			<div className='flex border p-5 rounded-xl border-blue-600'>
				<div className='flex'>
					<Mail color='#1E54F9' className='mr-3' />
					<span>wijudev@gmail.com</span>
				</div>
				<div className='flex border-l ml-3 pl-3'>
					<Phone color='#22C55E' className='mr-3' />
					<span>+79998887444</span>
				</div>
				<div className='flex border-l ml-3 pl-3'>
					<MapPin color='#F71919' className='mr-3' />
					<span>Moscow, Russia</span>
				</div>
			</div>
			<span className=' h-5 text-xs mt-2 text-gray-400'>
				Copyrigth © 2024 Vladislav Hasanov. All rights reserved.
			</span>
		</footer>
	)
}

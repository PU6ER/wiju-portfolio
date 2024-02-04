import { FileSearch, Github, Mail, MapPin, Phone, Send } from 'lucide-react'
import Image from 'next/image'
import styles from './Footer.module.scss'

export default function Footer() {
	return (
		<footer className='sm:h-[150px] h-[150px] w-screen flex flex-col  items-center overflow-x-hidden px-3'>
			<hr className='h-px w-full  border-top border-blue-600' />
			<section className={styles.navbar}>
				<div className='flex flex-row gap-2'>
					<Image alt='logo' src='logo.svg' width={30} height={20} />
					<div className=''>
						<span className=''>wiju</span>
						<span className=' text-green-500'>.dev</span>
					</div>
				</div>
				<div
					className='hidden  lg:flex border p-5 rounded-xl border-blue-600'
					id='contacts'
				>
					<div className='flex gap-3'>
						<Mail color='#1E54F9' />
						<span>wijudev@gmail.com</span>
					</div>
					<div className='flex border-l ml-3 pl-3 gap-3'>
						<Phone color='#22C55E' />
						<span>+79998887444</span>
					</div>
					<div className='flex border-l ml-3 pl-3 gap-3'>
						<MapPin color='#F71919' />
						<span>Moscow, Russia</span>
					</div>
				</div>
				<div className='flex gap-3 items-center justify-center flex-row md:flex-row lg:flex-row xl:flex-row'>
					<div className='bg-primary p-1 rounded-lg cursor-pointer'>
						<Github />
					</div>
					<div className='bg-primary p-1 rounded-lg cursor-pointer'>
						<Send />
					</div>
					<div className='bg-primary p-1 rounded-lg cursor-pointer '>
						<FileSearch />
					</div>
				</div>
			</section>

			<span className=' h-5 text-xs mt-2 text-gray-400'>
				Copyrigth © 2024 Vladislav Hasanov. All rights reserved.
			</span>
		</footer>
	)
}

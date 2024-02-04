import { AnimatePresence, motion } from 'framer-motion'
import { Squash as Hamburger } from 'hamburger-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'

export default function NavbarMobile() {
	const [isOpen, setOpen] = useState(false)
	const ref = useRef(null)

	useClickAway(ref, () => setOpen(false))
	return (
		<div className='w-screen flex justify-between items-center px-3'>
			<div className='flex flex-row gap-2 lg:hidden'>
				<Image alt='logo' src='logo.svg' width={30} height={20} />
				<div className=''>
					<span className=''>wiju</span>
					<span className=' text-green-500'>.dev</span>
				</div>
			</div>
			<div ref={ref} className='lg:hidden'>
				<Hamburger toggled={isOpen} size={20} toggle={setOpen} />
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className='fixed left-0 shadow-4xl right-0 top-[3.1rem] p-5 pt-3  border-b border-b-white/20 backdrop-blur-sm  '
						>
							<ul className='grid gap-1'>
								<motion.li
									initial={{ scale: 0, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{
										type: 'spring',
										stiffness: 260,
										damping: 20,
										delay: 0.1 + 0 / 10,
									}}
									className='w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700'
								>
									<Link
										onClick={() => setOpen(prev => !prev)}
										className={
											'flex items-center justify-between w-full p-5 rounded-xl bg-primary'
										}
										href='#'
									>
										<span className='flex gap-1 text-lg'>Blog</span>
									</Link>
								</motion.li>
								<motion.li
									initial={{ scale: 0, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{
										type: 'spring',
										stiffness: 260,
										damping: 20,
										delay: 0.1 + 0 / 10,
									}}
									className='w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700'
								>
									<Link
										onClick={() => setOpen(prev => !prev)}
										className={
											'flex items-center justify-between w-full p-5 rounded-xl bg-primary'
										}
										href='#'
									>
										<span className='flex gap-1 text-lg'>Blog</span>
									</Link>
								</motion.li>
								<motion.li
									initial={{ scale: 0, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{
										type: 'spring',
										stiffness: 260,
										damping: 20,
										delay: 0.1 + 0 / 10,
									}}
									className='w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700'
								>
									<Link
										onClick={() => setOpen(prev => !prev)}
										className={
											'flex items-center justify-between w-full p-5 rounded-xl bg-primary'
										}
										href='#'
									>
										<span className='flex gap-1 text-lg'>Blog</span>
									</Link>
								</motion.li>
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}

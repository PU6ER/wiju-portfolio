// // import { NO_INDEX_PAGE } from '@/constants/seo.constants'

// export const metadata: Metadata = {
//     title: '',
//     ...NO_INDEX_PAGE
// }
'use client'
import { motion } from 'framer-motion'
import styles from './Carousel.module.scss'

export default function Carousel() {
	return (
		<motion.div
			className='flex justify-center mt-10 w-full'
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.5,
				// delay: 0.2,
				ease: [0, 0.71, 0.2, 1.01],
			}}
		>
			<div className='w-[460px] sm:w-[640px]  md:w-[768px] lg:w-[900px] inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
				<ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
					<li>
						<img
							className={styles.icon}
							src='typescript.svg'
							alt='TypeScript'
						/>
					</li>
					<li>
						<img className={styles.icon} src='react.svg' alt='React' />
					</li>
					<li>
						<img className={styles.icon} src='redux.svg' alt='Redux' />
					</li>
					<li>
						<img
							className={styles.icon}
							src='react-query-icon.svg'
							alt='React Query'
						/>
					</li>
					<li>
						<img className={styles.icon} src='nestjs.svg' alt='NestJS' />
					</li>
					<li>
						<img
							className={styles.icon}
							src='postgresql.svg'
							alt='PostgreSQL'
						/>
					</li>
					<li>
						<img className={styles.icon} src='nextjs-icon.svg' alt='NextJS' />
					</li>
					<li>
						<img className={styles.icon} src='sass.svg' alt='Sass' />
					</li>
					<li>
						<img
							className={styles.icon}
							src='tailwindcss-icon.svg'
							alt='Tailwind'
						/>
					</li>
				</ul>
				<ul
					className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'
					aria-hidden='true'
				>
					<li>
						<img
							className={styles.icon}
							src='typescript.svg'
							alt='TypeScript'
						/>
					</li>
					<li>
						<img className={styles.icon} src='react.svg' alt='React' />
					</li>
					<li>
						<img className={styles.icon} src='redux.svg' alt='Redux' />
					</li>
					<li>
						<img
							className={styles.icon}
							src='react-query-icon.svg'
							alt='React Query'
						/>
					</li>
					<li>
						<img className={styles.icon} src='nestjs.svg' alt='NestJS' />
					</li>
					<li>
						<img
							className={styles.icon}
							src='postgresql.svg'
							alt='PostgreSQL'
						/>
					</li>
					<li>
						<img className={styles.icon} src='nextjs-icon.svg' alt='NextJS' />
					</li>
					<li>
						<img className={styles.icon} src='sass.svg' alt='Sass' />
					</li>
					<li>
						<img
							className={styles.icon}
							src='tailwindcss-icon.svg'
							alt='Tailwind'
						/>
					</li>
				</ul>
			</div>
		</motion.div>
	)
}

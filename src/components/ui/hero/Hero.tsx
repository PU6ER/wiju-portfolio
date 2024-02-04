// // import { NO_INDEX_PAGE } from '@/constants/seo.constants'

// export const metadata: Metadata = {
//     title: '',
//     ...NO_INDEX_PAGE
// }
'use client'
import { motion } from 'framer-motion'
import styles from './Hero.module.scss'

export default function Hero() {
	return (
		<div className={styles.hero}>
			{/* <h2 className=' self-start'>Hi, there</h2> */}
			<div className='flex flex-col md:flex-row lg:flex-row justify-center items-center'>
				<motion.img
					className={styles.faceTop}
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.5,
						// delay: 0.2,
						ease: [0, 0.71, 0.2, 1.01],
					}}
					src='face.jpg'
					alt='face'
				/>
				<motion.div
					className={styles.textContainer}
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.5,
						// delay: 0.2,
						ease: [0, 0.71, 0.2, 1.01],
					}}
				>
					<h2 className={styles.textTop}>Hi, there</h2>
					<h1 className={styles.text}>
						I am <br /> Hasanov Vlad
					</h1>
					<span className={styles.textDescription}>
						Welcome to my corner of the web, where creativity meets
						functionality. I'm a passionate Frontend Developer, dedicated to
						crafting seamless and visually stunning digital experiences
					</span>
				</motion.div>
				<motion.img
					className={styles.face}
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.5,
						// delay: 0.2,
						ease: [0, 0.71, 0.2, 1.01],
					}}
					src='face.jpg'
					alt='face'
				/>
			</div>
		</div>
	)
}

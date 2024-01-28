// // import { NO_INDEX_PAGE } from '@/constants/seo.constants'

// export const metadata: Metadata = {
//     title: '',
//     ...NO_INDEX_PAGE
// }
import styles from './Hero.module.scss'

export default function Hero() {
	return (
		<div className={styles.hero}>
			{/* <h2 className=' self-start'>Hi, there</h2> */}
			<div className='flex flex-row'>
				<div className={styles.textContainer}>
					<h2 className={styles.textTop}>Hi, there</h2>
					<h1 className={styles.text}>
						I am <br /> Hasanov Vlad
					</h1>
					<span className={styles.textDescription}>
						Welcome to my corner of the web, where creativity meets
						functionality. I'm a passionate Frontend Developer, dedicated to
						crafting seamless and visually stunning digital experiences
					</span>
				</div>
				<img className={styles.face} src='face.jpg' alt='face' />
			</div>
		</div>
	)
}

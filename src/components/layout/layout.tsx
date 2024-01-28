import type { PropsWithChildren } from 'react'
import styles from './layout.module.scss'
import Navbar from './navbar/Navbar'

export default function LayoutClient({ children }: PropsWithChildren<unknown>) {
	return (
		<main className={styles.main}>
			<div className={styles.layout}>
				<Navbar />
				{children}
			</div>
		</main>
	)
}

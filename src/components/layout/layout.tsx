import type { PropsWithChildren } from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import styles from './layout.module.scss'

export default function LayoutClient({ children }: PropsWithChildren<unknown>) {
	return (
		<main className={styles.main}>
			<div className={styles.layout}>
				<Header />
				{children}
				<Footer />
			</div>
		</main>
	)
}

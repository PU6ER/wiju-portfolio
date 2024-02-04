import Carousel from '@/components/ui/carousel/Carousel'
import Hero from '@/components/ui/hero/Hero'
import Skills from '@/components/ui/skills/Skills'
import Works from '@/components/ui/works/Works'

export default function Home() {
	return (
		<div className=''>
			<Hero />
			<Carousel />
			<Skills />
			{/* <Works /> */}
		</div>
	)
}

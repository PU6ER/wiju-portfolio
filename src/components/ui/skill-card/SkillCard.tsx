import { Cog, Lightbulb, Palette, Rocket } from 'lucide-react'
interface ISkill {
	name: string
	description: string
	icon: string
}
export default function SkillCard({ name, description, icon }: ISkill) {
	return (
		<div className='flex flex-col items-center justify-center bg-transparent border border-blue-600 rounded-xl w-[400px] h-[200px]'>
			<div className='flex  flex-col items-center  h-[60px] mt-3 mb-3'>
				{icon === 'rocket' ? (
					<div className='flex bg-primary p-1 rounded-lg '>
						<Rocket />
					</div>
				) : icon === 'palette' ? (
					<div className=' flex bg-primary p-1 rounded-lg justify-self-start'>
						<Palette />
					</div>
				) : icon === 'lightbulb' ? (
					<div className='bg-primary p-1 rounded-lg'>
						<Lightbulb />
					</div>
				) : (
					<div className='bg-primary p-1 rounded-lg'>
						<Cog />
					</div>
				)}
				<span className=' font-bold mt-2'>{name}</span>
			</div>

			<span className='h-[140px] w-[350px] text-sm text-center'>{description}</span>
		</div>
	)
}

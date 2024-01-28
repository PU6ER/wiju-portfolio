import SkillCard from '../skill-card/SkillCard'
import { skillsData } from './skills-data'
export default function Skills() {
	return (
		<section className='flex flex-col w-full justify-center items-center mt-20'>
			<h2 className=' text-[40px]'>Creative Skills</h2>
			<span className='w-[750px] text-gray-400'>
				As a Frontend Developer, I possess a diverse set of skills and expertise
				to bring your ideas to life
			</span>
			<div className=' flex justify-center items-center mt-5'>
				<div className='grid grid-cols-2 gap-8 '>
					{skillsData.map(skill => (
						<SkillCard
							key={skill.name}
							name={skill.name}
							description={skill.description}
							icon={skill.icon}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

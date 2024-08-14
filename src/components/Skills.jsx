import SectionTitle from './SectionTitle'
import { skills } from '../data'
import SkillsCard from './SkillsCard'

const Skills = () => {
	return (
		<div>
			<section className='align-element py-20' id='skills'>
				<SectionTitle text='tech stack' />
				<div className='pt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
					{skills.map((skill) => {
						return <SkillsCard key={skill.id} {...skill} />
					})}
				</div>
			</section>
		</div>
	)
}

export default Skills

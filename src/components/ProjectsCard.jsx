import { FaGithub } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

const ProjectsCard = ({ url, img, github, title, text }) => {
	return (
		<article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
			<img
				src={img}
				alt='Project Image'
				className='w-full h-64 object-cover rounded-t-lg'
			/>
			<div className='capitalize p-8'>
				<h2 className='font-medium text-xl tracking-wide'>{title}</h2>
				<p className='mt-4 text-slate-700 leading-loose whitespace-pre-wrap'>{text}</p>
				<div className='mt-4 flex gap-x-4'>
					<a href={url}>
						<TbWorldWww className='w-8 h-8 text-slate-500 hover:text-black duration-300' />
					</a>
					<a href={github}>
						<FaGithub className='w-8 h-8 text-slate-500 hover:text-black duration-300' />
					</a>
				</div>
			</div>
		</article>
	)
}

export default ProjectsCard

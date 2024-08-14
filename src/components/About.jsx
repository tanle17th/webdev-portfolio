import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

const About = () => {
	return (
		<section className='bg-white py-20' id='about'>
			<div className='align-element grid md:grid-cols-2 items-center gap-16'>
				<img src={aboutSvg} alt='About SVG' className='w-full h-64' />
				<article>
					<SectionTitle text='about me' />
					<p className='text-slate-600 mt-8 leading-loose'>
						I have 2 years of experience developing scalable
						software applications (mobile and web). In my most
						recent role as a software application developer at
						RESTORE Network, I held responsibility for the full life
						cycle development of the codebase platform by creating
						and maintaining models, building out new features and
						migrating big data transformation.
					</p>
				</article>
			</div>
		</section>
	)
}

export default About

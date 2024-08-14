import { FaGithubSquare, FaGoogle, FaLinkedin } from 'react-icons/fa'
import heroImg from '../assets/hero.svg'

const Hero = () => {
	return (
		<div className='bg-emerald-100 py-24' id='home'>
			<div className='align-element grid md:grid-cols-2 items-center gap-8'>
				<article>
					<h1 className='text-7xl font-bold tracking-wider'>
						I&apos;m Tan Le
					</h1>
					<p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
						Full Stack Developer
					</p>
					<p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
						code that delivers business value is my forte
					</p>
					<div className='flex gap-x-4 mt-4'>
						<a href='https://github.com/tanle17th'>
							<FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
						</a>
						<a href='https://www.linkedin.com/in/vanphuctanle/'>
							<FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
						</a>
						<a href='mailto:phtan.lee@gmail.com'>
							<FaGoogle className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
						</a>
					</div>
				</article>
				<article className='hidden md:block'>
					<img src={heroImg} alt='image' className='h-80 lg:h-96' />
				</article>
			</div>
		</div>
	)
}

export default Hero

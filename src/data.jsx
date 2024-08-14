import { nanoid } from 'nanoid'
import { FaAws, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa'
import { GrGraphQl } from 'react-icons/gr'

export const links = [
	{ id: nanoid(), href: '#home', text: 'home' },
	{ id: nanoid(), href: '#skills', text: 'skills' },
	{ id: nanoid(), href: '#projects', text: 'projects' },
	{ id: nanoid(), href: '#about', text: 'about' },
]

export const skills = [
	{
		id: nanoid(),
		title: 'HTML&CSS',
		icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
		text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
	},
	{
		id: nanoid(),
		title: 'Javascript',
		icon: <FaJs className='h-16 w-16 text-emerald-500' />,
		text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
	},
	{
		id: nanoid(),
		title: 'React',
		icon: <FaReact className='h-16 w-16 text-emerald-500' />,
		text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
	},
	{
		id: nanoid(),
		title: 'NodeJS',
		icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
		text: 'Thorough knowledge in Node.js, building scalable and high-performance server-side applications with a focus on asynchronous programming and event-driven architecture.',
	},
	{
		id: nanoid(),
		title: 'AWS',
		icon: <FaAws className='h-16 w-16 text-emerald-500' />,
		text: 'Advanced expertise in AWS, designing and managing secure, scalable, and reliable cloud infrastructures with deep knowledge of services like EC2, S3, Lambda, CloudWatch and CloudTrail.',
	},
	{
		id: nanoid(),
		title: 'APIs',
		icon: <GrGraphQl className='h-16 w-16 text-emerald-500' />,
		text: 'Strong experience in designing and implementing robust GraphQL and REST APIs, ensuring seamless data exchange and efficient communication between front-end and back-end systems.',
	},
]

export const projects = [
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://whatisup-tl.netlify.app/',
		github: 'https://github.com/tanle17th/ecommerce-web-shop',
		title: 'Web shop',
		text: 'Full-stack ecommerce web shop with payment and authorization with ReactJS, Material UI, EcommerceJS and StripeJS',
	},
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://yelp-camp-tl.onrender.com/',
		github: 'https://github.com/tanle17th/yelp-camp',
		title: 'YelpCamp',
		text: 'Platform for reviewing and sharing campsite experiences with Node, Express, EJS, Bootstrap, MapBox and MongoDB',
	},
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://music-player-tl.netlify.app/',
		github: 'https://github.com/tanle17th/music-player',
		title: 'Music player',
		text: 'Simple music player demo with cool features with HTML & CSS, Bootstrap and JavaScript',
	},
]

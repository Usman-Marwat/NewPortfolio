import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	graphql,
	python,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	gamehub,
	oldportfolio,
	usmanified,
	construction,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'React Native Developer',
		icon: mobile,
	},
	{
		title: 'Backend Developer',
		icon: backend,
	},
	{
		title: 'AI Enthusiast',
		icon: creator,
	},
];

const technologies = [
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},

	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},

	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Graph Ql',
		icon: graphql,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'python',
		icon: python,
	},
	{
		name: 'docker',
		icon: docker,
	},
];

const projects = [
	{
		name: 'Game Hub',
		description:
			'It is a video game database and discovery platform that allows users to track their video game collection, discover new games, and connect with other gamers. ',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'Chakra UI',
				color: 'green-text-gradient',
			},
			{
				name: 'Zustand',
				color: 'pink-text-gradient',
			},
		],
		image: gamehub,
		source_code_link: 'https://game-hub-beta.vercel.app/',
	},
	{
		name: 'Smart Construction (FYP)',
		description:
			'A Mobile app where people can design contract for their house construction and contractors can bid. Material suppliers can build their online shops and manage supply chains.',
		tags: [
			{
				name: 'reactNative',
				color: 'blue-text-gradient',
			},
			{
				name: 'Node',
				color: 'green-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'pink-text-gradient',
			},
			{
				name: 'Python/Ml',
				color: 'pink-text-gradient',
			},
		],
		image: construction,
		source_code_link:
			'https://github.com/Usman-Marwat/SmartConstructionContractor-FrontEnd',
	},
	{
		name: 'Old Portfolio',
		description:
			'My old portfolio build with basic frontend tools and with any libraries. Rationale was to revise the plain old vanilla Javascript concepts.',
		tags: [
			{
				name: 'html',
				color: 'blue-text-gradient',
			},
			{
				name: 'css',
				color: 'green-text-gradient',
			},
			{
				name: 'javascript',
				color: 'pink-text-gradient',
			},
		],
		image: oldportfolio,
		source_code_link: 'https://old-portfolio-ruddy.vercel.app/',
	},
	{
		name: 'Cloud Hosting',
		description:
			'Home page of an imaginary cloud hosting service. The rationale was to revise the basic front end concepts',
		tags: [
			{
				name: 'html',
				color: 'blue-text-gradient',
			},
			{
				name: 'css',
				color: 'pink-text-gradient',
			},
		],
		image: usmanified,
		source_code_link: 'https://usmanified.netlify.app/',
	},
];

export { services, technologies, projects };

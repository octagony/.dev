import { IStackBlock } from "./interfaces/utility.interface";

export { cn } from "cn"

//ANIMATION
export const animationFadeInUp = {
	hidden: { 
		opacity: 0, 
		y: 24 
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
	} as const
};

// STACK
export const stackBlock: IStackBlock[] = [
	{
		name: 'Language',
		stack: [
			{
				title: 'Javascript',
				icon: 'javascript'
			},
			{
				title: 'Typescript',
				icon: 'typescript'
			}
		]
	},
	{
		name: 'Frontend',
		stack: [
			{
				title: 'React',
				icon: 'react'
			},
			{
				title: 'Vue',
				icon: 'vue'
			},
			{
				title: 'Next.js',
				icon: 'nextdotjs'
			},
			{
				title: 'Nuxt',
				icon: 'nuxt'
			},
			{
				title: 'Tanstack',
				icon: 'tanstack'
			},
			{
				title: 'shadcn/ui',
				icon: 'shadcn-ui'
			},
			{
				title: 'Tailwind',
				icon: 'tailwind-css'
			},
			{
				title: 'Bootstrap',
				icon: 'bootstrap'
			},
			{
				title: 'Bulma',
				icon: 'bulma'
			},
			{
				title: 'Materialize',
				icon: 'materializecss'
			},
			{
				title: 'Zustand',
				icon: 'zustand'
			},
			{
				title: 'Redux',
				icon: 'redux'
			},
			{
				title: 'Pinia',
				icon: 'pinia'
			},
			{
				title: 'MobX',
				icon: 'mobx'
			},
		]
	},
	{
		name: 'Bundlers',
		stack: [
			{
				title: 'Webpack',
				icon: 'webpack'
			},
			{
				title: 'Gulp',
				icon: 'gulp'
			},
			{
				title: 'Vite',
				icon: 'vitejs',
			}
		]
	},
	{
		name: 'Backend & DB',
		stack: [
			{
				title: 'Node.js',
				icon: 'nodejs'
			},
			{
				title: 'Bun',
				icon: 'bun'
			},
			{
				title: 'Express',
				icon: 'express'
			},
			{
				title: 'NestJS',
				icon: 'nestjs'
			},
			{
				title: 'Fastify',
				icon: 'fastify'
			},
			{
				title: 'PostgreSQL',
				icon: 'postgresql'
			},
			{
				title: 'MySQL',
				icon: 'mysql'
			},
			{
				title: 'SQLite',
				icon: 'sqlite'
			},
		]
	},
	{
		name: 'Workflow',
		stack: [
			{
				title: 'Git',
				icon: 'git'
			},
			{
				title: 'Docker',
				icon: 'docker'
			},
		]
	},
	{
		name: 'Testing',
		stack: [
			{
				title: 'Vitest',
				icon: 'vitest'
			},
			{
				title: 'Jest',
				icon: 'jest'
			},
			{
				title: 'RTL',
				icon: 'testing-library'
			},
		]
	}
]
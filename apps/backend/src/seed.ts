import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "@prisma/client";

const databaseUrl = process.env.DATABASE_URL;
let prismaOptions = {};

if (databaseUrl?.startsWith('libsql://')) {
  const url = databaseUrl.split('?')[0];
  const authToken = databaseUrl.split('authToken=')[1];
  
  const adapter = new PrismaLibSql({
    url,
    authToken,
  });
  
  prismaOptions = { adapter };
}

const prisma = new PrismaClient(prismaOptions);

async function main() {
	await prisma.project.deleteMany();
	await prisma.technology.deleteMany();

	const project1 = await prisma.project.create({
		data: {
			title: 'Kitabox',
			descriptionShort: 'Free temporary email',
			descriptionFull: 'Temporary emails are needed by everyone — for testing websites that require registration, to protect against spam after subscribing to unnecessary newsletters, and for quickly viewing content if you don’t want to provide your real email. Kitabox solves this problem. Visit the website, get an email for the next 5 minutes, and forget about spam in your inbox',
			image: '/projects/kitabox.jpg',
			link: '/projects/1',
			projectLink: 'https://kitabbox.netlify.app/',
			githubLink: 'https://github.com/octagony/kitabox',
			isFavorite: true,
			stack: {
				connectOrCreate: [
					{
						where: { title: 'Tanstack' },
						create: {
							title: 'Tanstack', icon: 'tanstack'
						},
					},
					{
						where: { title: 'TypeScript' },
						create: { title: 'TypeScript', icon: 'typescript' },
					},
					{
						where: { title: 'Tailwind CSS' },
						create: { title: 'Tailwind CSS', icon: 'tailwind-css' },
					},
				]
			}
		}
	});

	const project2 = await prisma.project.create({
		data: {
			title: 'Larius',
			descriptionShort: 'Scan files and links for viruses',
			descriptionFull: 'Upload files and links and check them for viruses and other vulnerabilities',
			image: '/projects/larius.jpg',
			link: '/projects/2',
			projectLink: 'https://larius-one.vercel.app/',
			githubLink: 'https://github.com/octagony/larius',
			isFavorite: true,
			stack: {
				connectOrCreate: [
					{
						where: { title: 'Next.JS' },
						create: { title: 'NextJS', icon: 'nextdotjs' },
					},
					{
						where: { title: 'TypeScript' },
						create: { title: 'TypeScript', icon: 'typescript' },
					},
					{
						where: { title: 'Tailwind CSS' },
						create: { title: 'Tailwind CSS', icon: 'tailwind-css' },
					},
					{
						where: { title: 'shadcn/ui' },
						create: { title: 'shadcn/ui', icon: 'shadcn-ui' },
					},
				],
			},
		},
	});

	const project3 = await prisma.project.create({
		data: {
			title: 'Midas Bot',
			descriptionShort: 'Telegram bot for viewing information about cryptocurrencies',
			descriptionFull: 'This Telegram bot allows you to quickly view information about the cryptocurrency you need, get the top current currencies on the market, or obtain market statistics',
			image: '/projects/midas_bot.jpg',
			link: '/projects/3',
			projectLink: 'https://t.me/midas_currency_bot',
			githubLink: 'https://github.com/octagony/midas_tg_bot',
			isFavorite: true,
			stack: {
				connectOrCreate: [
					{
						where: { title: 'TypeScript' },
						create: { title: 'TypeScript', icon: 'typescript' },
					},
				],
			},
		},
	});

	const project4 = await prisma.project.create({
		data: {
			title: 'ToolsCSS',
			descriptionShort: 'Minimal CSS-framework inspired by TailwindCSS',
			descriptionFull: 'A minimalist, single-file CSS framework inspired by TailwindCSS, it allows you to integrate it either via an NPM package or through a native build file. It includes most of the utility classes used in everyday development.',
			image: '/projects/toolscss.png',
			link: '/projects/4',
			githubLink: 'https://github.com/octagony/toolscss',
			isFavorite: true,
			stack: {
				connectOrCreate: [
					{
						where: { title: 'CSS' },
						create: { title: 'CSS', icon: 'css' },
					},
					{
						where: { title: 'Vite' },
						create: { title: 'Vite', icon: 'vitejs' },
					},
				],
			},
		},
	});
}

main()
	.catch((e) => {
		console.error('Seed failed:', e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
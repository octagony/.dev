import { GithubIcon } from '@components/ui/Icon/GithubIcon';
import { IProjectBlock, IStackBlock } from './interfaces/utility.interface';
import { LinkedinIcon } from '@components/ui/Icon/LinkedinIcon';
import { TelegramIcon } from '@components/ui/Icon/TelegramIcon';
import { MailIcon } from '@components/ui/Icon/MailIcon';

export { cn } from 'cn';

//ANIMATION
export const animationFadeInUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  } as const,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// DOT COLORS
export const DOT_COLOR = {
  light: {
    default: 'rgba(0, 0, 0, 0.08)',
    active: 'rgba(0, 0, 0, 0.16)',
  },
  dark: {
    default: 'rgba(255, 255, 255, 0.06)',
    active: 'rgba(255, 255, 255, 0.12)',
  },
} as const;

// SOCIAL LINKS
export const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/octagony',
    description: 'Check out my code',
    icon: GithubIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/mihail-rutskiy-7a309323a',
    description: 'Connect professionally',
    icon: LinkedinIcon,
  },
  {
    name: 'Telegram',
    href: 'https://t.me/moctagony',
    description: 'Send direct message',
    icon: TelegramIcon,
  },
  {
    name: 'Email',
    href: 'mailto:mrkwork@yandex.by',
    description: 'Get in touch directly',
    icon: MailIcon,
  },
];

// STACK
export const stackBlock: IStackBlock[] = [
  {
    name: 'Language',
    stack: [
      {
        title: 'Javascript',
        icon: 'javascript',
      },
      {
        title: 'Typescript',
        icon: 'typescript',
      },
    ],
  },
  {
    name: 'Frontend',
    stack: [
      {
        title: 'React',
        icon: 'react',
      },
      {
        title: 'Vue',
        icon: 'vue',
      },
      {
        title: 'Next.js',
        icon: 'nextdotjs',
      },
      {
        title: 'Nuxt',
        icon: 'nuxt',
      },
      {
        title: 'Tanstack',
        icon: 'tanstack',
      },
      {
        title: 'shadcn/ui',
        icon: 'shadcn-ui',
      },
      {
        title: 'Tailwind',
        icon: 'tailwind-css',
      },
      {
        title: 'Bootstrap',
        icon: 'bootstrap',
      },
      {
        title: 'Bulma',
        icon: 'bulma',
      },
      {
        title: 'Materialize',
        icon: 'materializecss',
      },
      {
        title: 'Zustand',
        icon: 'zustand',
      },
      {
        title: 'Redux',
        icon: 'redux',
      },
      {
        title: 'Pinia',
        icon: 'pinia',
      },
      {
        title: 'MobX',
        icon: 'mobx',
      },
    ],
  },
  {
    name: 'Bundlers',
    stack: [
      {
        title: 'Webpack',
        icon: 'webpack',
      },
      {
        title: 'Gulp',
        icon: 'gulp',
      },
      {
        title: 'Vite',
        icon: 'vitejs',
      },
    ],
  },
  {
    name: 'Backend & DB',
    stack: [
      {
        title: 'Node.js',
        icon: 'nodejs',
      },
      {
        title: 'Bun',
        icon: 'bun',
      },
      {
        title: 'Express',
        icon: 'express',
      },
      {
        title: 'NestJS',
        icon: 'nestjs',
      },
      {
        title: 'Fastify',
        icon: 'fastify',
      },
      {
        title: 'PostgreSQL',
        icon: 'postgresql',
      },
      {
        title: 'MySQL',
        icon: 'mysql',
      },
      {
        title: 'SQLite',
        icon: 'sqlite',
      },
    ],
  },
  {
    name: 'Workflow',
    stack: [
      {
        title: 'Git',
        icon: 'git',
      },
      {
        title: 'Docker',
        icon: 'docker',
      },
    ],
  },
  {
    name: 'Testing',
    stack: [
      {
        title: 'Vitest',
        icon: 'vitest',
      },
      {
        title: 'Jest',
        icon: 'jest',
      },
      {
        title: 'RTL',
        icon: 'testing-library',
      },
    ],
  },
];

export const projectBlock: IProjectBlock[] = [
  {
    id: 1,
    title: 'Kitabox',
    descriptionShort: 'Create a temporary email address for receiving emails',
    link: '/projects/',
    image: '',
  },
];

import { IProjectBlock } from '@lib/interfaces/utility.interface'

export const MOCK_PROJECTS: IProjectBlock[] = [
  {
    id: 1,
    title: 'Kitabox',
    descriptionShort: 'Free temporary email',
    image: '/projects/kitabox.jpg',
    link: '/projects/1',
    isFavorite: true,
  },
  {
    id: 2,
    title: 'Larius',
    descriptionShort: 'Scan files and links for viruses',
    image: '/projects/larius.jpg',
    link: '/projects/2',
    isFavorite: true,
  },
  {
    id: 3,
    title: 'Midas Bot',
    descriptionShort: 'Telegram bot for viewing information about cryptocurrencies',
    image: '/projects/midas_bot.jpg',
    link: '/projects/3',
    isFavorite: true,
  },
  {
    id: 4,
    title: 'ToolsCSS',
    descriptionShort: 'Minimal CSS-framework inspired by TailwindCSS',
    image: '/projects/toolscss.png',
    link: '/projects/4',
    isFavorite: true,
  },
]

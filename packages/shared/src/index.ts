export interface ITechnology {
  title: string;
  icon: string;
}

export interface IProjectBlock {
  id: number;
  title: string;
  descriptionShort: string;
  image: string;
  link: string;
}

export interface IProjectPage extends IProjectBlock {
  stack: ITechnology[];
  descriptionFull: string;
  githubLink: string;
  projectLink: string;
}
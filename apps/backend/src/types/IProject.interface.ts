export interface ITechnology {
  id?: number;
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
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateProjectInput {
  title: string;
  descriptionShort: string;
  descriptionFull: string;
  image: string;
  link: string;
  projectLink: string;
  githubLink: string;
  stack: ITechnology[];
}

export interface UpdateProjectInput {
  title?: string;
  descriptionShort?: string;
  descriptionFull?: string;
  image?: string;
  link?: string;
  projectLink?: string;
  githubLink?: string;
  stack?: ITechnology[];
}
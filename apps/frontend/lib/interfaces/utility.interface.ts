// STACK INTERFACES
export interface IStackBlock {
  name: string;
  stack: ITechnology[];
}

export interface ITechnology {
  title: string;
  icon: string;
}

//PROJECT INTERFACES

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

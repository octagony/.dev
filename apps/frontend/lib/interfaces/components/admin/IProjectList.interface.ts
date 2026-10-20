import { IProjectBlock } from '@lib/interfaces/utility.interface'

export interface IProjectListProps {
  projects: IProjectBlock[]
  deleteProject: (id: number) => Promise<void>
  isLoading: boolean
}

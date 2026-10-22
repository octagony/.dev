import { IProjectBlock, IProjectPage } from '@lib/interfaces/utility.interface'
import { API_BASE_URL } from '@lib/utils'
import { SWRConfiguration } from 'swr'

async function fetcher<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

export const swrConfig: SWRConfiguration = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  dedupingInterval: 0,
  errorRetryCount: 0,
}

export const apiHandlers = {
  //PROJECTS
  getAllProjects: () => fetcher<IProjectBlock[]>(`${API_BASE_URL}/projects`),
  getProjectById: (id: number) => fetcher<IProjectPage>(`${API_BASE_URL}/projects/${id}`),
  getFavorites: () => fetcher<IProjectBlock[]>(`${API_BASE_URL}/projects/favorites`),
}

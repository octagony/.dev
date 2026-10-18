import { apiHandlers, swrConfig } from "@lib/api/fetcher";
import { MOCK_PROJECTS } from "@lib/api/mock";
import { IProjectBlock, IProjectPage } from "@lib/interfaces/utility.interface";
import useSWR from 'swr';

export function useProjects() {
  const { data, error, isLoading, mutate } = useSWR<IProjectBlock[]>(
    '/api/projects',
    () => apiHandlers.getAllProjects(),
    {
			...swrConfig,
      fallbackData: MOCK_PROJECTS,
    }
  );

  return {
    projects: MOCK_PROJECTS,
    isLoading,
    isError: error,
    mutate,
  };
}

export function useProject(id: number | null) {
  const { data, error, isLoading, mutate } = useSWR<IProjectPage>(
    id ? `/api/projects/${id}` : null,
    () => apiHandlers.getProjectById(id!),
    {
			...swrConfig,
    }
  );

  return {
    project: data,
    isLoading,
    isError: error,
    mutate,
  };
}
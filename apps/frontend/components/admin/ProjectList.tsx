import { Button } from '@components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@components/ui/table'
import { IProjectListProps } from '@lib/interfaces/components/admin/IProjectList.interface'
import { cn } from 'cn'
import { Pencil, Star, Trash2 } from 'lucide-react'
import Link from 'next/link'

export function ProjectsList({
  projects,
  deleteProject,
  isLoading,
  handleToggleFavorite,
}: IProjectListProps) {
  if (isLoading) {
    return (
      <div className="rounded-xl border border-border bg-muted/30 overflow-hidden">Loading...</div>
    )
  }

  return (
    <div className="rounded-xl border border-border bg-muted/30 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-40">Title</TableHead>
            <TableHead className="w-full">Link</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.title}</TableCell>
              <TableCell className="font-medium">/project/{project.id}</TableCell>
              <TableCell className="flex gap-4">
                <button
                  onClick={() => handleToggleFavorite(project.id)}
                  className="p-2 rounded-lg transition-all"
                >
                  <Star
                    className={cn(
                      'h-4 w-4 transition-colors',
                      project.isFavorite
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-muted-foreground hover:text-yellow-400',
                    )}
                  />
                </button>
                <Link
                  href={`/admin/projects/update/${project.id}`}
                  className="p-2 rounded-lg hover:bg-background border border-transparent hover:border-border transition-all text-muted-foreground hover:text-foreground"
                >
                  <Pencil className="h-4 w-4" />
                </Link>
                <Button variant="outline" onClick={() => deleteProject(project.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

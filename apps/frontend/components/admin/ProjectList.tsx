import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@components/ui/table";
import { useProjects } from "@lib/hooks/useProject";
import { Pencil, Trash2 } from "lucide-react";

export function ProjectsList() {
	const { projects } = useProjects();

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
							<TableCell className="font-medium">{project.link}</TableCell>
							<TableCell>
								<button className="p-2 rounded-lg hover:bg-background border border-transparent hover:border-border transition-all text-muted-foreground hover:text-foreground">
									<Pencil className="h-4 w-4" />
								</button>
								<button className="p-2 rounded-lg hover:bg-destructive/10 border border-transparent hover:border-destructive/20 transition-all text-muted-foreground hover:text-destructive">
									<Trash2 className="h-4 w-4" />
								</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};
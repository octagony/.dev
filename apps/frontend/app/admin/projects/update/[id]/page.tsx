"use client";

import { Button } from "@components/ui/button";
import { updateProject } from "@lib/admin/actions";
import { IProjectPage } from "@lib/interfaces/utility.interface";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { use, useEffect, useState } from "react";

export default function UpdateProject({ params }: { params: Promise<{ id: string; }>; }) {
	const { id } = use(params);
	const [project, setProject] = useState<IProjectPage | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/projects/${id}`)
			.then(res => res.json())
			.then(data => {
				setProject(data);
				setLoading(false);
			})
			.catch((e) => console.log(e))
			.finally(() => setLoading(false));
	}, [id]);

	if (loading) {
		return (
			<div className="py-24 text-center text-muted-foreground">
				Loading...
			</div>
		);
	}

	if (!project) {
		return (
			<div className="py-24 text-center text-muted-foreground">
				Project not found...
			</div>
		);
	}

	const stackString = project.stack?.map((t) => t.title).join(', ') || '';

	return (
		<div className="max-w-3xl mx-auto py-12 px-4">
			<Link href="/admin" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
				<ArrowLeft className="h-4 w-4" /> Back to list
			</Link>

			<h1 className="text-2xl font-semibold mb-6">Update: {project.title}</h1>

			<form action={(formData) => updateProject(Number(id), formData)} className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="space-y-2">
						<label className="text-sm font-medium">Title *</label>
						<input name="title" defaultValue={project.title} required className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground" />
					</div>
					<div className="space-y-2">
						<label className="text-sm font-medium">Link *</label>
						<input name="link" defaultValue={project.link} required className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground" />
					</div>
				</div>

				<div className="space-y-2">
					<label className="text-sm font-medium">Short description *</label>
					<input name="descriptionShort" defaultValue={project.descriptionShort} required className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground" />
				</div>

				<div className="space-y-2">
					<label className="text-sm font-medium">Full description *</label>
					<textarea name="descriptionFull" defaultValue={project.descriptionFull} required rows={6} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="space-y-2">
						<label className="text-sm font-medium">URL to image *</label>
						<input name="image" defaultValue={project.image} required className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground" />
					</div>
					<div className="space-y-2">
						<label className="text-sm font-medium">Stack (divided by ,)</label>
						<input name="stackTitles" defaultValue={stackString} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground" />
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="space-y-2">
						<label className="text-sm font-medium">Link to project</label>
						<input name="projectLink" defaultValue={project.projectLink || ''} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground" />
					</div>
					<div className="space-y-2">
						<label className="text-sm font-medium">Link to github *</label>
						<input name="githubLink" defaultValue={project.githubLink} required className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground" />
					</div>
				</div>

				<div className="pt-4">
					<Button size='lg' type="submit">
						Update
					</Button>
				</div>
			</form>
		</div>
	);
}
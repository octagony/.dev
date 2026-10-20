import { Button } from "@components/ui/button";
import { createProject } from "@lib/admin/actions";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreateProject() {
  return (
    <div className="max-w-3xl mx-auto py-24 px-4">
      <Link href="/admin" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" />Back to list
      </Link>

      <h1 className="text-2xl font-semibold mb-6">Add new project</h1>

      <form action={createProject} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Title *</label>
            <input name="title" required className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Link *</label>
            <input name="link" required placeholder="/projects/my-project" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Short description *</label>
          <input name="descriptionShort" required className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Full description *</label>
          <textarea name="descriptionFull" required rows={6} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">URL to image *</label>
            <input name="image" required placeholder="/projects/image.jpg" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Stack (divided by ,)</label>
            <input name="stackTitles" placeholder="Next.js, Tailwind CSS, Prisma" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Link to project</label>
            <input name="projectLink" placeholder="https://..." className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Link to github *</label>
            <input name="githubLink" required placeholder="https://github.com/..." className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground" />
          </div>
        </div>

        <div className="pt-4">
          <Button size='lg' type="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
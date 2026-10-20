"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LogOut, Plus, Loader2 } from "lucide-react";
import { cn } from "@lib/utils";
import { Container } from "@components/layout/Container";
import { ProjectsList } from "@components/admin/ProjectList";
import { deleteProject } from "@lib/admin/actions";
import { useProjects } from "@lib/hooks/useProject";
import Link from "next/link";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const { projects, isLoading, mutate } = useProjects();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const handleDelete = async (projectId: number) => {
    try {
      const result = await deleteProject(projectId);

      if (result.success) {
        mutate((currentProjects) =>
          currentProjects?.filter((p) => p.id !== projectId),
          false
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container className="py-20 md:py-32">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Admin Dashboard
          </h1>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium",
            "border border-border bg-background text-foreground",
            "transition-all hover:bg-muted hover:scale-[1.02] active:scale-[0.98]"
          )}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>

      <div className="mb-8">
        <Link
          href="/admin/projects/create">
          <button
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium",
              "bg-foreground text-background",
              "transition-all hover:bg-foreground/90 hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            <Plus className="h-4 w-4" />
            Add new Project
          </button>
        </Link>
      </div>

      <ProjectsList projects={projects} isLoading={isLoading} deleteProject={handleDelete} />
    </Container>
  );
}



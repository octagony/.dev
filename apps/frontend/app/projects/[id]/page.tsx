'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { useProject } from '@lib/hooks/useProject'
import { Container } from '@components/layout/Container'
import { cn } from 'cn'
import { GithubIcon } from '@components/ui/Icon/GithubIcon'
import { SectionHeader } from '@components/layout/SectionHeader'
import { animationFadeUp } from '@lib/utils'

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()

  const projectId = params.id ? Number(params.id) : null
  const { project, isLoading } = useProject(projectId)

  if (isLoading) {
    return (
      <Container className="py-32 flex items-center justify-center min-h-[92vh]">
        <p className="text-muted-foreground font-mono text-sm animate-pulse">
          Loading project details...
        </p>
      </Container>
    )
  }

  if (!project) {
    return (
      <Container className="py-20 flex items-center justify-center min-h-[92vh]">
        <p className="text-muted-foreground font-mono text-sm animate-pulse">Project not found</p>
      </Container>
    )
  }

  return (
    <Container className="py-20">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        onClick={() => router.back()}
        className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </motion.button>

      <motion.div initial="hidden" animate="visible" variants={animationFadeUp} className="mb-8">
        <SectionHeader text={project.title} />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationFadeUp}
        transition={{ delay: 0.1 }}
        className="mb-10 md:mb-12 relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationFadeUp}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
      >
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-md font-semibold text-foreground flex items-center gap-2">
            About the project
          </h2>
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-base md:text-lg">
            {project.descriptionFull}
          </p>
        </div>

        <div className="space-y-10 md:grid md:grid-cols-2 col-span-full">
          <div>
            <h3 className="text-md font-semibold text-foreground mb-4 flex items-center gap-2">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech.title}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border text-xs font-medium text-foreground transition-colors hover:bg-muted"
                >
                  <Image
                    src={`/icons/${tech.icon}.svg`}
                    alt="img"
                    width={0}
                    height={0}
                    className="rounded-sm w-4 h-4 md:w-5 md:h-5"
                  />{' '}
                  {tech.title}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-md font-semibold text-foreground mb-4 flex items-center gap-2">
              Links
            </h3>
            <div className="flex flex-col gap-3">
              {project.projectLink && (
                <Link
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center justify-center gap-2 w-full rounded-xl',
                    'bg-foreground text-background px-4 py-3 text-sm font-medium',
                    'transition-all hover:bg-foreground/90 hover:scale-[1.02] active:scale-[0.98]',
                  )}
                >
                  <ExternalLink className="h-4 w-4" />
                  View Live Project
                </Link>
              )}

              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center gap-2 w-full rounded-xl',
                  'border border-border bg-muted/50 text-foreground px-4 py-3 text-sm font-medium',
                  'transition-all hover:bg-muted hover:scale-[1.02] active:scale-[0.98]',
                )}
              >
                <GithubIcon />
                View Source Code
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  )
}

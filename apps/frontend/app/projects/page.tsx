'use client'

import { Container } from '@components/layout/Container'
import { SectionHeader } from '@components/layout/SectionHeader'
import { ProjectCard } from '@components/ui/ProjectCard'
import { useProjects } from '@lib/hooks/useProject'
import { animationFadeUp } from '@lib/utils'
import { cn } from 'cn'
import { motion } from 'motion/react'

export default function AllProjectsPage() {
  const { projects, isLoading } = useProjects()

  if (isLoading) {
    return (
      <Container className="py-32 flex items-center justify-center min-h-[92vh]">
        <p className="text-muted-foreground font-mono text-sm animate-pulse">
          Loading project details...
        </p>
      </Container>
    )
  }

  return (
    <Container className="py-20">
      <div className="mb-8">
        <SectionHeader text="All projects" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={animationFadeUp}
            transition={{ delay: index * 0.1 }}
            className={cn(
              'group w-full relative overflow-hidden',
              'transition-all duration-300',
              'hover:scale-[1.02]',
              'active:scale-[0.98] cursor-pointerhover:bg-muted/60',
            )}
          >
            <ProjectCard key={project.id} project={project} />
          </motion.div>
        ))}
      </div>
    </Container>
  )
}

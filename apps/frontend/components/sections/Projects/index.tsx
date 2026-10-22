'use client'

import { motion } from 'motion/react'
import { useFavoriteProjects } from '@lib/hooks/useProject'
import { Container } from '@components/layout/Container'
import { cn } from 'cn'
import { SectionHeader } from '@components/layout/SectionHeader'
import { animationFadeUp } from '@lib/utils'
import { ProjectCard } from '@components/ui/ProjectCard'

export function Projects() {
  const { projects, isLoading } = useFavoriteProjects()

  if (isLoading) {
    return (
      <Container className="pt-4 pb-4 md:pt-8 md:pb-8 border-l border-r border-t">
        <div className="text-center text-muted-foreground font-mono text-sm">
          Loading projects...
        </div>
      </Container>
    )
  }

  return (
    <Container className="pt-4 pb-4 md:pt-8 md:pb-8 border-l border-r border-t">
      <SectionHeader text="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
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
            <ProjectCard project={project} key={index} />
          </motion.div>
        ))}
      </div>
    </Container>
  )
}

'use client'

import { IProjectBlock } from '@lib/interfaces/utility.interface'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@components/ui/card'
import Image from 'next/image'
import { Button } from '@components/ui/button'
import Link from 'next/link'

export function ProjectCard({ project }: { project: IProjectBlock }) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0" key={project.id}>
      <div className="relative aspect-video overflow-hidden rounded-t-xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 z-10 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.descriptionShort}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full py-2 md:py-5 cursor-pointer">
          <Link href={`/projects/${project.id}`} className="w-full">
            View project
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

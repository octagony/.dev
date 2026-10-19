"use client";

import { motion } from "motion/react";
import { useProjects } from "@lib/hooks/useProject";
import { Container } from "@components/layout/Container";
import { cn } from "cn";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@components/ui/card";
import { Button } from "@components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@components/layout/SectionHeader";
import { fadeUp } from "@lib/utils";

export function Projects() {
  const { projects, isLoading } = useProjects();

  if (isLoading) {
    return (
      <Container className="pt-4 pb-4 md:pt-8 md:pb-8 border-l border-r border-t">
        <div className="text-center text-muted-foreground font-mono text-sm">
          Loading projects...
        </div>
      </Container>
    );
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
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "group w-full relative overflow-hidden",
              "transition-all duration-300",
              "hover:scale-[1.02]",
              "active:scale-[0.98] cursor-pointerhover:bg-muted/60"
            )}
          >
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
                <CardDescription>
                  {project.descriptionShort}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={`/projects/${project.id}`} className="w-full">
                  <Button className="w-full cursor-pointer">View project</Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
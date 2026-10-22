import { PrismaService } from "@/prisma/prisma.service.js";
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDTO } from "@/project/dto/create-project.dto.js";
import { IProjectBlock, IProjectPage, ITechnology } from "@/types/IProject.interface.js";
import { UpdateProjectDTO } from "@/project/dto/update-project.dto.js";

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createProjectDto: CreateProjectDTO): Promise<IProjectPage> {
    const { stack, ...projectData } = createProjectDto;

    if (createProjectDto.isFavorite) {
      await this.checkFavoriteLimit();
    }

    const project = await this.prisma.project.create({
      data: {
        ...projectData,
        stack: {
          connectOrCreate: stack.map((tech) => ({
            where: { title: tech.title },
            create: {
              title: tech.title,
              icon: tech.icon,
            },
          })),
        },
      },
      include: {
        stack: true,
      },
    });

    return this.mapToIProjectPage(project);
  }

  async findAll(): Promise<IProjectBlock[]> {
    const projects = await this.prisma.project.findMany({
      include: {
        stack: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return projects.map(this.mapToIProjectBlock);
  }

  async findOne(id: number): Promise<IProjectPage> {
    const project = await this.prisma.project.findUnique({
      where: { id },
      include: {
        stack: true,
      }
    });

    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }

    return this.mapToIProjectPage(project);
  }

  async findFavorites(): Promise<IProjectBlock[]> {
    const projects = await this.prisma.project.findMany({
      where: {
        isFavorite: true
      },
      include: {
        stack: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 4,
    });

    return projects.map(this.mapToIProjectBlock);
  }

  async update(id: number, updateProjectDto: UpdateProjectDTO): Promise<IProjectPage> {
    const { stack, ...projectData } = updateProjectDto;

    const existingProject = await this.prisma.project.findUnique({
      where: { id },
    });

    if (!existingProject) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }

    if (updateProjectDto.isFavorite && !existingProject.isFavorite) {
      await this.checkFavoriteLimit();
    }

    if (stack && stack.length > 0) {
      for (const tech of stack) {
        await this.prisma.technology.upsert({
          where: { title: tech.title },
          create: {
            title: tech.title,
            icon: tech.icon,
          },
          update: {
            icon: tech.icon,
          },
        });
      }
    }

    const project = await this.prisma.project.update({
      where: { id },
      data: {
        ...projectData,
        stack: stack
          ? {
            set: [],
            connect: stack.map((tech) => ({ title: tech.title }))
          }
          : undefined,
      },
      include: {
        stack: true,
      },
    });

    return this.mapToIProjectPage(project);
  }

  async toggleFavorite(id: number): Promise<{ isFavorite: boolean; }> {
    const project = await this.prisma.project.findUnique({ where: { id } });

    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }

    if (!project.isFavorite) {
      await this.checkFavoriteLimit();
    }

    const updated = await this.prisma.project.update({
      where: { id },
      data: { isFavorite: !project.isFavorite },
    });

    return { isFavorite: updated.isFavorite };
  }

  async remove(id: number): Promise<void> {
    const existingProject = await this.prisma.project.findUnique({
      where: { id },
    });

    if (!existingProject) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }

    await this.prisma.project.delete({
      where: { id },
    });
  }

  private async checkFavoriteLimit(): Promise<void> {
    const count = await this.prisma.project.count({
      where: { isFavorite: true },
    });

    if (count >= 4) {
      throw new BadRequestException(
        'Max favorite count = 4'
      );
    }
  }

  private mapToIProjectBlock(project: any): IProjectBlock {
    return {
      id: project.id,
      title: project.title,
      descriptionShort: project.descriptionShort,
      image: project.image,
      link: project.link,
      isFavorite: project.isFavorite
    };
  }

  private mapToIProjectPage(project: any): IProjectPage {
    return {
      id: project.id,
      title: project.title,
      descriptionShort: project.descriptionShort,
      descriptionFull: project.descriptionFull,
      image: project.image,
      link: project.link,
      projectLink: project.projectLink,
      githubLink: project.githubLink,
      isFavorite: project.isFavorite,
      stack: project.stack.map((tech: ITechnology) => ({
        title: tech.title,
        icon: tech.icon,
      })),
    };
  }
}

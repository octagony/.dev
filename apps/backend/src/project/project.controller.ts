import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { CreateProjectDTO } from "@/project/dto/create-project.dto.js";
import { IProjectBlock, IProjectPage } from "@/types/IProject.interface.js";
import { ProjectService } from "@/project/project.service.js";
import { UpdateProjectDTO } from "@/project/dto/update-project.dto.js";
import { AdminGuard } from "@/admin/admin.guard.js";

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) { }

  @Post()
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createProjectDTO: CreateProjectDTO): Promise<IProjectPage> {
    return this.projectService.create(createProjectDTO);
  }

  @Get()
  async findAll(): Promise<IProjectBlock[]> {
    return this.projectService.findAll();
  }

  @Get('favorites')
  async findFavorites(): Promise<IProjectBlock[]> {
    return this.projectService.findFavorites();
  }

  @Patch(':id/favorite')
  @UseGuards(AdminGuard)
  async toggleFavorite(@Param('id', ParseIntPipe) id: number) {
    return this.projectService.toggleFavorite(id);
  }


  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<IProjectPage> {
    return this.projectService.findOne(id);
  }

  @Put(':id')
  @UseGuards(AdminGuard)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProjectDto: UpdateProjectDTO,
  ): Promise<IProjectPage> {
    return this.projectService.update(id, updateProjectDto);
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.projectService.remove(id);
  }
}

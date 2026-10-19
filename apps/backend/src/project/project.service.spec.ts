import { Test, TestingModule } from '@nestjs/testing';
import { ProjectService } from './project.service.js';
import { PrismaService } from "@/prisma/prisma.service.js";

describe('ProjectService', () => {
  let service: ProjectService;
  let prisma: PrismaService;

  const mockPrisma = {
    project: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectService, {
        provide: PrismaService,
        useValue: mockPrisma,
      },],
    }).compile();

    service = module.get<ProjectService>(ProjectService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('findAll', () => {
    it('must return array of projects', async () => {
      const mockProjects = [
        {
          id: 1,
          title: 'Test Project',
          descriptionShort: 'Short desc',
          descriptionFull: 'Full desc',
          image: 'img.jpg',
          link: '/1',
          projectLink: 'https://test.com',
          githubLink: 'https://github.com',
          stack: [
            { id: 1, title: 'Next.js', icon: 'icon' }
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      mockPrisma.project.findMany.mockResolvedValue(mockProjects);

      const result = await service.findAll();

      expect(result).toHaveLength(1);
      expect(result[0].title).toBe('Test Project');
      expect(mockPrisma.project.findMany).toHaveBeenCalledWith({
        include: { stack: true },
        orderBy: { createdAt: 'desc' },
      });
    });
  });

  describe('findOne', () => {
    it('must return project by id', async () => {
      const mockProject = {
        id: 1,
        title: 'Test Project',
        descriptionShort: 'Short',
        descriptionFull: 'Full',
        image: 'img.jpg',
        link: '/1',
        projectLink: 'https://test.com',
        githubLink: 'https://github.com',
        stack: [{ id: 1, title: 'Next.js', icon: 'icon' }],
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockPrisma.project.findUnique.mockResolvedValue(mockProject);

      const result = await service.findOne(1);

      expect(result).toBeDefined();
      expect(result.id).toBe(1);
      expect(mockPrisma.project.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
        include: { stack: true },
      });
    });
  });

  describe('create', () => {
    it('must create new project', async () => {
      const mockCreatedProject = {
        id: 2,
        title: 'New Project',
        descriptionShort: 'Short',
        descriptionFull: 'Full',
        image: 'img.jpg',
        link: '/new',
        projectLink: 'https://new.com',
        githubLink: 'https://github.com/new',
        stack: [{ title: 'React', icon: 'icon' }],
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockPrisma.project.create.mockResolvedValue(mockCreatedProject);

      const result = await service.create(mockCreatedProject);

      expect(result.title).toBe('New Project');
      expect(mockPrisma.project.create).toHaveBeenCalled();
    });
  });

   describe('remove', () => {
    it('must remove project by id', async () => {
      const mockProject = { id: 1, title: 'Test' };
      
      mockPrisma.project.findUnique.mockResolvedValue(mockProject);
      mockPrisma.project.delete.mockResolvedValue(undefined);

      await service.remove(1);

      expect(mockPrisma.project.delete).toHaveBeenCalledWith({ where: { id: 1 } });
    });
  });
});

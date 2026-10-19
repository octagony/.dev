import { Test, TestingModule } from '@nestjs/testing';
import { ProjectController } from './project.controller.js';
import { ProjectService } from "./project.service.js";

describe('ProjectController', () => {
  let controller: ProjectController;
  let service: ProjectService;

  const mockProjectService = {
    findAll: vi.fn(),
    findOne: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    remove: vi.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectController],
      providers: [
        {
          provide: ProjectService,
          useValue: mockProjectService,
        },
      ],
    }).compile();

    controller = module.get<ProjectController>(ProjectController);
    service = module.get<ProjectService>(ProjectService);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('findAll', () => {
    it('call service.findAll and return value', async () => {
      const mockResult = [{ id: 1, title: 'Project 1' }];
      mockProjectService.findAll.mockResolvedValue(mockResult);

      const result = await controller.findAll();

      expect(result).toEqual(mockResult);
      expect(mockProjectService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('call service.findOne and return value', async () => {
      const mockResult = { id: 1, title: 'Project 1' };
      mockProjectService.findOne.mockResolvedValue(mockResult);

      const result = await controller.findOne(1);

      expect(result).toEqual(mockResult);
      expect(mockProjectService.findOne).toHaveBeenCalledWith(1);
    });
  });

  describe('create', () => {
    it('call service.create and return value', async () => {
      const createDto = {
        title: 'New',
        descriptionShort: 'S',
        descriptionFull: 'F',
        image: 'img',
        link: 'l',
        projectLink: 'p',
        githubLink: 'g',
        stack: [],
      };

      const mockResult = { id: 2, ...createDto };
      mockProjectService.create.mockResolvedValue(mockResult);

      const result = await controller.create(createDto);

      expect(result).toEqual(mockResult);
      expect(mockProjectService.create).toHaveBeenCalledWith(createDto);
    });
  });

  describe('remove', () => {
    it('call service.remove with id', async () => {
      mockProjectService.remove.mockResolvedValue(undefined);

      await controller.remove(1);

      expect(mockProjectService.remove).toHaveBeenCalledWith(1);
    });
  });
});

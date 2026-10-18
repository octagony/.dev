import { CreateProjectDTO } from "@/project/dto/create-project.dto.js";
import { PartialType } from "@nestjs/swagger";

export class UpdateProjectDTO extends PartialType(CreateProjectDTO) {}
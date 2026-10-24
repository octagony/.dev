import { CreateProjectInput, ITechnology } from "@/types/IProject.interface.js";
import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsOptional, IsString, ValidateNested } from "class-validator";


export class TechnologyDTO implements ITechnology {
	@IsString()
	title: string;
	@IsString()
	icon: string;
}


export class CreateProjectDTO implements CreateProjectInput{
  @IsString()
  title: string;

  @IsString()
  descriptionShort: string;

  @IsString()
  descriptionFull: string;

  @IsString()
  image: string;

  @IsString()
  link: string;

  @IsOptional()
  @IsString()
  projectLink?: string;

  @IsString()
  githubLink: string;

  @IsOptional()
  @IsBoolean()
  isFavorite: boolean;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TechnologyDTO)
  stack: ITechnology[];
}
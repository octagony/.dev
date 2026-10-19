import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from "./prisma/prisma.module.js";
import { ProjectModule } from './project/project.module.js';
import { ProjectController } from "./project/project.controller.js";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [PrismaModule, ProjectModule, JwtModule.register({
    global: true, secret: process.env.NEXTAUTH_SECRET, signOptions: {
      expiresIn: '30d',
    },
  })],
  controllers: [AppController, ProjectController],
  providers: [AppService],
})
export class AppModule { }

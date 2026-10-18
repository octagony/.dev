import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements 
OnModuleInit, OnModuleDestroy {
 constructor() {
    const databaseUrl = process.env.DATABASE_URL;
    if (databaseUrl?.startsWith('libsql://')) {
      super({
        datasources: {
          db: {
            url: databaseUrl,
          },
        },
      });
    } else {
      super();
    }
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
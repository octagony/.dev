import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const databaseUrl = process.env.DATABASE_URL;

    if (databaseUrl?.startsWith('libsql://')) {
      const url = databaseUrl.split('?')[0];
      const authToken = databaseUrl.split('authToken=')[1];
      
      const adapter = new PrismaLibSql({
        url,
        authToken,
      });
      
      super({ adapter });
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
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient {
  private pool:Pool
  constructor() {
    super();
    this.pool = new Pool({
      user: 'postgres',  // replace with your PostgreSQL username
      host: 'localhost',
      database: 'aapthitech',  // replace with your database name
      password: 'root',  // replace with your password
      port: 5433,  // default PostgreSQL port
    });
  }
}
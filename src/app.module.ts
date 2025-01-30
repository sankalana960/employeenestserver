import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Authentication } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PrismaService } from './prisma/prisma.service';
import { AddUserModule } from './adduser/adduser.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DeleteUserModule } from './deleteUser/deleteuser.module';
import { GetUserModule } from './getuser/getuser.module';
import { UpdateUserModule } from './updateuser/updateuser.module';


@Module({
  imports: [Authentication, DashboardModule, AddUserModule, DeleteUserModule, GetUserModule, UpdateUserModule, ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public/uploads'),
    serveRoot: '/public/uploads',
  })],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

import { Module } from "@nestjs/common";
import { GetUserService } from "./getuser.service";
import { GetUserController } from "./getuser.controller";
import { PrismaService } from "src/prisma/prisma.service";



@Module({
    providers:[GetUserService, PrismaService],
    controllers:[GetUserController]
})
export class GetUserModule{

}
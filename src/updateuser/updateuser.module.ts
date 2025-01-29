import { Module } from "@nestjs/common";
import { UpdateUserController } from "./updateuser.controller";
import { UpdateUserService } from "./updateuser.service";
import { PrismaService } from "src/prisma/prisma.service";



@Module({
    controllers:[UpdateUserController],
    providers:[UpdateUserService, PrismaService]
})
export class UpdateUserModule{
    
}
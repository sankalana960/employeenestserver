import { Module } from "@nestjs/common";
import { DeleteUserController } from "./deleteuser.controller";
import { DeleteUserService } from "./deleteuser.service";
import { PrismaService } from "src/prisma/prisma.service";



@Module({
    controllers:[DeleteUserController],
    providers:[DeleteUserService, PrismaService]
})
export class DeleteUserModule{

}
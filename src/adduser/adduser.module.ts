import { Module } from "@nestjs/common";
import { AddUserController } from "./adduser.controller";
import { AddUserService } from "./adduser.service";
import { PrismaService } from "src/prisma/prisma.service";


@Module({
    controllers:[AddUserController],
    providers:[AddUserService, PrismaService]
})
export class AddUserModule{

}
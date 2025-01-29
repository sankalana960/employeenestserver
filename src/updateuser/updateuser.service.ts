import { Injectable, NotFoundException } from "@nestjs/common";
import { Gender, Role } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";



@Injectable()
export class UpdateUserService{

    constructor(public readonly prismaservice:PrismaService){}

    async updateuser(id: number, firstName: string, lastName: string, email: string, gender: Gender, number: string, hobbies: string, role: Role, imagePath: string | null){
        const user = await this.prismaservice.user.findUnique({ where: { id } });
        if (!user) {
            throw new NotFoundException('User not found');
        }
        const updatedUser = await this.prismaservice.user.update({
            where: { id },
            data: {
              firstName,
              lastName,
              email,
              gender,
              phoneNumber: number,
              hobbies,
              role,
              imagePath: imagePath ?? user.imagePath, 
            },
          });
        return updatedUser
    }

}
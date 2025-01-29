import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class GetUserService{

    constructor(public readonly prismaservice:PrismaService){}

    async getUser(id:number){
        const user = await this.prismaservice.user.findUnique({
            where: { id },
          });
      
          if (!user) {
            throw new NotFoundException('User not found');
          }
      
          return {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            gender: user.gender,
            password: user.passwordEncoded,
            hobbies: user.hobbies,
            role: user.role,
            number: user.phoneNumber,
            imagePath: user.imagePath,
          };
    }
}
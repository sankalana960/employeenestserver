import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";



@Injectable()
export class DeleteUserService{

    constructor(public readonly prismaservice:PrismaService){}

    async deleteuser(id : number){
        const user = await this.prismaservice.user.findUnique({
            where: { id },
          });
      
          if (!user) {
            throw new NotFoundException('User not found');
          }
      
          await this.prismaservice.user.delete({
            where: { id },
          });
      
          return { message: 'User deleted successfully' };
    }
}
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AddUserService{

    constructor(public readonly prismaservice:PrismaService){}

    async userDetails(data: any, imagePath:string){
        try {
            const newUser = await this.prismaservice.user.create({
              data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                gender: data.gender,
                passwordEncoded: data.password,
                phoneNumber: data.number,
                hobbies: data.hobbies,
                role: data.role,
                imagePath,
              },
            });
      
            return { message: 'User details saved successfully', valid: true, user: newUser };
          } catch (error) {
            console.error(error);
            return { message: 'Error saving user details', valid: false };
          }
    }
}
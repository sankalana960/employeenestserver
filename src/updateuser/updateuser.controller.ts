import { Body, Controller, Param, Patch, Put, UploadedFile, UseInterceptors } from "@nestjs/common";
import { UpdateUserService } from "./updateuser.service";
import {Multer} from 'multer'
import { Gender, Role } from "@prisma/client";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller()
export class UpdateUserController{
    
    constructor(public readonly updateuserservice:UpdateUserService){}

    @UseInterceptors(FileInterceptor('image'))
    @Put("updateuser/:id")
    updateuser(@Param('id') id: string ,@Body() body:{ firstName: string, lastName: string, email: string, gender: Gender, number: string, hobbies: string, role: Role },
    @UploadedFile() file: Multer.File){
        const imagePath = file ? file.filename : null;
        const { firstName, lastName, email, gender, number, hobbies, role } = body;
        const parsedID = parseInt(id[0])
        return this.updateuserservice.updateuser(parsedID, firstName, lastName, email, gender, number, hobbies, role, imagePath)
    }
}
import { Controller, Post,  UseInterceptors, UploadedFile, Body, Res} from "@nestjs/common";
import { AddUserService } from "./adduser.service";
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from "src/upload.config";
import { Express } from 'express';
import { Multer } from 'multer';
import { API_ROUTES } from "src/common/routes";

@Controller(API_ROUTES.USER.BASE)
export class AddUserController{

    constructor(public readonly adduserservice:AddUserService){}

    @Post(API_ROUTES.USER.ADDUSER)
    @UseInterceptors(FileInterceptor('image', multerConfig))
    async userDetails(@Body() body: any, @UploadedFile() file: Multer.File, @Res() res: Response){
        try {
            if (!body.firstName || !body.lastName || !body.email || !body.gender || !body.password || !body.number || !body.hobbies || !body.role) {
              return res.status(400).json({ message: 'All fields are required', valid: false });
            }
      
            const imagePath = file ? file.filename : null;
            const result = await this.adduserservice.userDetails(body, imagePath);
      
            return res.status(201).json(result);
          } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error', valid: false });
          }
    }
}
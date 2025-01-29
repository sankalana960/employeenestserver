import { Controller, Get, Param } from "@nestjs/common";
import { GetUserService } from "./getuser.service";


@Controller()
export class GetUserController{

    constructor(public readonly getuserserveice: GetUserService){}


    @Get("getusers/:id")
    getUser(@Param('id') userId: string){
        const parsedUserId = parseInt(userId)
        return this.getuserserveice.getUser(parsedUserId)
    }

}
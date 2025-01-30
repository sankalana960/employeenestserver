import { Controller, Get, Param } from "@nestjs/common";
import { GetUserService } from "./getuser.service";
import { API_ROUTES } from "src/common/routes";


@Controller(API_ROUTES.USER.BASE)
export class GetUserController{

    constructor(public readonly getuserserveice: GetUserService){}


    @Get(API_ROUTES.USER.GETUSER)
    getUser(@Param('id') userId: string){
        const parsedUserId = parseInt(userId)
        return this.getuserserveice.getUser(parsedUserId)
    }
}
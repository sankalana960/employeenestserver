import { Controller, Delete, Param } from "@nestjs/common";
import { DeleteUserService } from "./deleteuser.service";
import { API_ROUTES } from "src/common/routes";



@Controller(API_ROUTES.USER.BASE)
export class DeleteUserController{

    constructor(public readonly deleteuserservice:DeleteUserService){}

    @Delete(API_ROUTES.USER.DELETEUSER)
    deleteUser(@Param('id') userId: string){
        const userIdInt = parseInt(userId)
        return this.deleteuserservice.deleteuser(userIdInt)
    }
}
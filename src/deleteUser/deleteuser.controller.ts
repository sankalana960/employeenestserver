import { Controller, Delete, Param } from "@nestjs/common";
import { DeleteUserService } from "./deleteuser.service";



@Controller()
export class DeleteUserController{

    constructor(public readonly deleteuserservice:DeleteUserService){}

    @Delete('deleteuser/:id')
    deleteUser(@Param('id') userId: string){
        const userIdInt = parseInt(userId)
        return this.deleteuserservice.deleteuser(userIdInt)
    }
}
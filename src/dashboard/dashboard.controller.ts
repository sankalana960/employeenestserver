import { Controller, Get } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";
import { API_ROUTES } from "src/common/routes";


@Controller(API_ROUTES.GETALLUSERS.BASE)
export class DashboardController{

    constructor(private readonly dashboardSerice:DashboardService){}


    @Get(API_ROUTES.GETALLUSERS.GETALLUSERS)
    getusers(){
        return this.dashboardSerice.getUsers()
    }
}
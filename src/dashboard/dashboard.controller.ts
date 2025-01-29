import { Controller, Get } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";


@Controller()
export class DashboardController{

    constructor(private readonly dashboardSerice:DashboardService){}


    @Get('getusers')
    getusers(){
        return this.dashboardSerice.getUsers()
    }
}
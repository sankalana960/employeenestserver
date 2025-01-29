import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PrismaService } from "src/prisma/prisma.service";

// The @Module decorator is used to define a module in NestJS. A module is a way to group related 
// functionality and organize your application into smaller parts.
@Module({
    // The 'controllers' property is an array where you define all the controllers 
    // for this module. Controllers handle incoming HTTP requests and return responses.
    controllers:[AuthController],// This module has one controller, AuthController, which handles 'auth' routes

    // The 'providers' property is an array where you define all the providers (services) 
    // for this module. Providers are typically used for business logic, database operations, or 
    // any other shared functionality.
    providers:[AuthService, PrismaService]// This module has one provider, AuthService, which handles the business logic for authentication
})


export class Authentication{

}
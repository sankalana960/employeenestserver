import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

// The @Controller decorator defines a controller class. It tells NestJS that this class will 
// handle HTTP requests for the specified route ('auth').
@Controller()
export class AuthController{

    // The constructor is used to inject dependencies into this class. Here, we're injecting 
    // the AuthService so that it can be used in the controller's methods.
    // NestJS automatically handles this dependency injection.
    constructor(private readonly authservice:AuthService){}


    // The @Post decorator defines an HTTP POST route. This is the endpoint that will handle 
    // POST requests to /auth/signup. When a POST request is sent to this route, the signup() 
    // method is triggered.
    @Post('loginuser')
    signup(@Body() body: { email: string; password: string }){
        const { email, password } = body;
        return this.authservice.signup(email, password)
    }
}
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

// The @Injectable decorator marks this class as a provider that can be injected into other 
// classes (like controllers). The empty object {} means no specific configuration is applied to this service.
@Injectable({})
export class AuthService{

    constructor(private readonly prisma: PrismaService){}
    // The 'signup' method is a simple method that could handle user registration logic.
    async signup(email:string, password:string) {
        const user = await this.prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            return { message: 'Invalid email or password', valid: false };
        }
        if (password !== user.passwordEncoded) {
        return { message: 'Invalid email or password', valid: false };
        }
        return {
            message: 'Login successful',
            valid: true,
            role: user.role,
            user: {
              id: user.id,
              email: user.email,
              firstName: user.firstName,
              imagePath: user.imagePath,
              role: user.role,
            }
        }
    }
}
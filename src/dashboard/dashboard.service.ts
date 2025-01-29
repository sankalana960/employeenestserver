import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class DashboardService{

    constructor(private readonly prisma: PrismaService) {}

    async getUsers() {
        return this.prisma.user.findMany({
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phoneNumber: true,
            imagePath: true,
            role: true,
          },
        });
      }
}
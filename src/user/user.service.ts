import { Injectable } from '@nestjs/common';
import { EditUserDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(
        private prisma: PrismaService,
        private jwt:JwtService,) {}

    async editUser(user: User, dto: EditUserDto) {

        return await this.prisma.user.update({
                data: {
                    lastName: dto.lastName,
                    firstName: dto.firstName,
                },

                where: {
                    id: user.id,
                }
            });
    }
}


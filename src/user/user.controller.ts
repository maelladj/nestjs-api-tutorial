import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { JwtGuard } from 'src/auth/guard';
import { EditUserDto } from './dto';
import { UserService } from "./user.service";


@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
    constructor(private UserService: UserService) {}

    @Get('me')
    getMe(
        @GetUser() user: User) {

        return user;
    }

    @Patch('me')
    editUser(
        @Body () dto: EditUserDto,
        @GetUser() user: User,
     )  {
           return this.UserService.editUser(user,dto) 
        }
} 

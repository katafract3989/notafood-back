import {Controller, Get, Request, UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from "../../auth/jwt-auth.guard";
import {JwtService} from "@nestjs/jwt";
import {UsersService} from "../users/users.service";

@Controller('me')
export class MeController {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}


    @Get()
    @UseGuards(JwtAuthGuard)
    async me(@Request() req) {
        const token = req.headers.authorization.replace('Bearer ', '')
        const authUser = this.jwtService.decode(token)

        return await this.usersService.getUser(authUser['id'])

    }

}

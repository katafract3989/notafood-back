import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Delete,
    Put, UseGuards,
} from '@nestjs/common';
import {UserDto} from "./dto/user.dto";

import {UsersService} from "./users.service";
import {JwtAuthGuard} from "../../auth/jwt-auth.guard";

@Controller('users')

export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    async getUsers() {
        return this.usersService.getUsers();
    }

    @Get(':id')
    async getUser(@Param('id') id: string) {
        return this.usersService.getUser(parseInt(id));
    }

    @Post()
    async create(@Body() userDto: UserDto) {
        await this.usersService.create(userDto)
    }

    @Put(':id')
    async update(@Body() userDto: UserDto, @Param('id') id: string) {
        await this.usersService.update(parseInt(id), userDto)
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.usersService.remove(parseInt(id))
    }


}

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import {BaseResource} from "../../resource/BaseResource";
import {UsersController} from './users.controller';
import {RestaurantsService} from "../restaurants/restaurants.service";

@Module({
    providers: [UsersService, BaseResource, RestaurantsService],
    exports: [UsersService, BaseResource, RestaurantsService],
    controllers: [UsersController]
})
export class UsersModule {}

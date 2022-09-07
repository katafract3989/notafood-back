import {Controller, Get, Param, Post, Body, Delete, Put, HttpCode, HttpStatus, Header} from '@nestjs/common';
import {CreateRestaurantDto} from "./dto/create-restaurant.dto";
import {UpdateRestaurantDto} from "./dto/update-restaurant.dto";
import {RestaurantsService} from "./restaurants.service";

@Controller('restaurants')
export class RestaurantsController {


    constructor(private readonly restaurantService: RestaurantsService) {}

    @Get()
    getRestaurants() {
        return this.restaurantService.getRestaurants();
    }

    @Get(':id')
    getRestaurant(@Param('id') id: string) {
        return this.restaurantService.getRestaurant(parseInt(id));
    }

    @Post()
    create(@Body() createRestaurantDto: CreateRestaurantDto) {
        this.restaurantService.create(createRestaurantDto)
    }

    @Put(':id')
    update(@Body() updateProductDto: UpdateRestaurantDto, @Param('id') id: string) {
        this.restaurantService.update(parseInt(id), updateProductDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        this.restaurantService.remove(parseInt(id))
    }



}

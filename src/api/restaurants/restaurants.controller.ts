import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Delete,
    Put,
} from '@nestjs/common';
import {CreateRestaurantDto} from "./dto/create-restaurant.dto";
import {UpdateRestaurantDto} from "./dto/update-restaurant.dto";
import {RestaurantsService} from "./restaurants.service";

@Controller('restaurants')

export class RestaurantsController {

    constructor(private readonly restaurantService: RestaurantsService) {
    }

    @Get()
    getRestaurants() {
        return this.restaurantService.getRestaurants();
    }

    @Get(':id')
    getRestaurant(@Param('id') id: string) {
        return this.restaurantService.getRestaurant(parseInt(id));
    }

    @Post()
    async create(@Body() createRestaurantDto: CreateRestaurantDto) {
        await this.restaurantService.create(createRestaurantDto)
    }

    @Put(':id')
    async update(@Body() updateProductDto: UpdateRestaurantDto, @Param('id') id: string) {
        await this.restaurantService.update(parseInt(id), updateProductDto)
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.restaurantService.remove(parseInt(id))
    }


}

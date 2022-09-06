import {Injectable} from "@nestjs/common";
import {CreateRestaurantDto} from "./dto/create-restaurant.dto";
import {UpdateRestaurantDto} from "./dto/update-restaurant.dto";
import {AppDataSource} from "../db"
import {Restaurant} from "./entity/restaurant.entity"

@Injectable()
export class RestaurantsService {

    async getRestaurants() {
        const result = await AppDataSource.manager.find(Restaurant, {
            relations: {
                categories: true,
            },
        })
        return {data: result}
    }

    async getRestaurant(id: number) {
        const result = await AppDataSource.manager.findOneByOrFail(Restaurant, {id: id})
        return {data: result}
    }

    async create(restaurantDto: CreateRestaurantDto) {
        await AppDataSource.manager.insert(Restaurant, restaurantDto)
    }

    async update(id: number, updateRestaurantDto: UpdateRestaurantDto,) {
        await AppDataSource.manager.update(Restaurant, id, updateRestaurantDto)
    }

    async remove(id: number) {
        await AppDataSource.manager.delete(Restaurant, id)
    }


}

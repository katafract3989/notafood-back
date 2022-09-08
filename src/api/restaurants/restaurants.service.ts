import {Injectable} from "@nestjs/common";
import {CreateRestaurantDto} from "./dto/create-restaurant.dto";
import {UpdateRestaurantDto} from "./dto/update-restaurant.dto";
import {AppDataSource} from "../../db/data-source"
import {Restaurant} from "./entity/restaurant.entity"

@Injectable()
export class RestaurantsService {

    private restaurantRepository = AppDataSource.getRepository(Restaurant)

    async getRestaurants() {
        const result = await this.restaurantRepository.find({
            relations: {
                categories: {
                    products: true
                },
            }
        });
        return {data: result}
    }

    async getRestaurant(id: number) {
        const result = await this.restaurantRepository.findOne({
          relations: {
              categories: {
                  products: true
              }
          },
          where: {
              id: id
          }
        }, );
        return {data: result}
    }

    async create(restaurantDto: CreateRestaurantDto) {
        await this.restaurantRepository.insert(restaurantDto);
    }

    async update(id: number, updateRestaurantDto: UpdateRestaurantDto,) {
        await this.restaurantRepository.update(id, updateRestaurantDto);
    }

    async remove(id: number) {
        await this.restaurantRepository.delete(id);
    }

}

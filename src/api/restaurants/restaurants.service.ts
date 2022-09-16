import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {CreateRestaurantDto} from "./dto/create-restaurant.dto";
import {UpdateRestaurantDto} from "./dto/update-restaurant.dto";
import {AppDataSource} from "../../data-source"
import {Restaurant} from "../../entities/restaurant"

@Injectable()
export class RestaurantsService {

    private restaurantRepository = AppDataSource.getRepository(Restaurant)

    async getRestaurants() {
        const result = await this.restaurantRepository.find();
        if (result) {
            return {data: result}
        } else {
            throw new HttpException({
                status: HttpStatus.NO_CONTENT,
                message: 'В Вашем районе нет ресторанов с доставкой',
            }, HttpStatus.NO_CONTENT);
        }
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
        });

        if (result) {
            return {data: result}
        } else {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                message: 'Ресторан не найден',
            }, HttpStatus.NOT_FOUND);
        }
    }

    async create(restaurantDto: CreateRestaurantDto) {
        try {
            await this.restaurantRepository.insert(restaurantDto);
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: e.sqlMessage,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async update(id: number, updateRestaurantDto: UpdateRestaurantDto,) {
        await this.restaurantRepository.update(id, updateRestaurantDto);
    }

    async remove(id: number) {
        await this.restaurantRepository.delete(id);
    }

}

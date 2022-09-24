import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {User} from "../../entities/user";
import {AppDataSource} from "../../data-source";
import {UserDto} from "./dto/user.dto";
import {BaseResource} from "../../resource/BaseResource";
import bcrypt from "bcryptjs";
import {RestaurantsService} from "../restaurants/restaurants.service";
import {Roles} from "../../constants/Roles"

@Injectable()
export class UsersService {

    constructor(
        public baseResource: BaseResource,
        public restaurantService: RestaurantsService,
    ) {}

    private userRepository = AppDataSource.getRepository(User)

    async findOne(username: string): Promise<UserDto | undefined> {
        return await this.userRepository.findOne({
            where: {
                username: username
            }
        });
    }

    async getUsers() {
        return await this.userRepository.find()
    }

    async getUser(id: number) {
        const user = await this.userRepository.findOne({
            relations: {
                restaurant: {
                    categories: {
                        products: true
                    }
                },
            },
            where: {
                id: id
            }
        });

        if(!user) {
            throw new HttpException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Пользователь не найден',
            }, HttpStatus.NOT_FOUND);
        }

        if(user.role === Roles.user) {
            return this.baseResource.omit(user, ['password', 'restaurant', 'restaurantId']);
        } else {
            return this.baseResource.omit(user, ['password', 'restaurantId']);
        }

    }

    async create(userDto: UserDto) {
        try {

            const user = userDto;
            const salt = bcrypt.genSaltSync(10);
            user.password = bcrypt.hashSync(user.password, salt);

            if(user.role === Roles.admin) {
              const restaurantId = await this.restaurantService.create({
                    title: "Название ресторана или кафе",
                    description: "Описание Вашего ресторана или кафе",
                    rating: 1,
                    minDeliveryTime: 15,
                    maxDeliveryTime: 30,
                    isActive: false,
                })
                user.restaurantId = restaurantId;
            }

            await this.userRepository.insert(userDto);


        } catch (e) {
            throw new HttpException({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: e.sqlMessage,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async update(id: number, userDto: UserDto) {

    }

    async remove(id: number) {

    }
}

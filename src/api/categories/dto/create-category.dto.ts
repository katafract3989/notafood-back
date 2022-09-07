import {Restaurant} from "../../restaurants/entity/restaurant.entity";

export class CreateCategoryDto {
    readonly title: string
    readonly restaurantId?: Restaurant
}

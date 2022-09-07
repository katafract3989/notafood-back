import {Restaurant} from "../../restaurants/entity/restaurant.entity";

export class UpdateCategoryDto {
    readonly title: string
    readonly restaurantId?: Restaurant
}

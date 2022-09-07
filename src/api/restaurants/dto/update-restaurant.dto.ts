export class UpdateRestaurantDto {
    readonly preview: string
    readonly title: string
    readonly description: string
    readonly rating: number
    readonly minDeliveryTime: number
    readonly maxDeliveryTime: number
    readonly categoryId: number
}

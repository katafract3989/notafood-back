export class UserDto {
    readonly id?: number
    readonly username: string
    readonly first_name: string
    readonly last_name: string
    readonly role: number
    readonly email: string
    readonly phone: string
    password: string
    restaurantId?: number | null
}

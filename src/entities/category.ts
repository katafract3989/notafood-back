import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm"
import {Restaurant} from "./restaurant";
import {Product} from "./product";

@Entity({ name: 'categories' })
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    restaurantId: number

    @ManyToOne(() => Restaurant, (restaurant) => restaurant.categories)
    restaurant: Restaurant

    @OneToMany(() => Product, (product) => product.category)
    products: Category[]
}

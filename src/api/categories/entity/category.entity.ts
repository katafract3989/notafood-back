import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm"
import {Restaurant} from "../../restaurants/entity/restaurant.entity";
import {Product} from "../../products/entity/product.entity";

@Entity({ name: 'categories' })
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @ManyToOne(() => Restaurant, (restaurant) => restaurant.categories)
    restaurant: Restaurant

    @OneToMany(() => Product, (product) => product.category)
    products: Category[]
}

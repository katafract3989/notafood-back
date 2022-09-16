import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import {Category} from "./category";

@Entity({ name: 'restaurants' })
export class Restaurant {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    rating: number

    @Column()
    minDeliveryTime: number

    @Column()
    maxDeliveryTime: number

    @Column()
    preview: string

    @OneToMany(() => Category, (category) => category.restaurant)
    categories: Category[]

}

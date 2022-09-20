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

    @Column({
        default: 'https://twizz.ru/wp-content/uploads/2020/02/1582615693_a473b247515ba4634549d14b29064223.jpg'
    })
    preview: string

    @Column()
    isActive: boolean

    @OneToMany(() => Category, (category) => category.restaurant)
    categories: Category[]

}

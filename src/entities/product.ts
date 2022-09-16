import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"
import {Category} from "./category";

@Entity({ name: 'products' })
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    preview: string

    @Column()
    title: string

    @Column()
    price: number

    @Column()
    portion: string

    @Column()
    categoryId: number

    @ManyToOne(() => Category, (category) => category.products)
    category: Category

}

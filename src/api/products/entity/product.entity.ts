import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"
import {Category} from "../../categories/entity/category.entity";

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

    @ManyToOne(() => Category, (category) => category.products)
    category: Category

}

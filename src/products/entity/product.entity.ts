import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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

}

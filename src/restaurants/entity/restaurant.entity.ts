import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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

    @Column()
    categoryId: number

}

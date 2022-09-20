import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm"
import {Restaurant} from "./restaurant";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        unique: true,
        nullable: true,
    })
    username: string

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    password: string

    @Column()
    role: number

    @Column()
    email: string

    @Column()
    phone: string

    @Column({
        unique: true,
        nullable: true,
    })
    restaurantId: number

    @OneToOne(() => Restaurant)
    @JoinColumn()
    restaurant: Restaurant

}

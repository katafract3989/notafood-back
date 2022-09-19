import { Injectable } from '@nestjs/common';
import {User} from "../types/User";

@Injectable()
export class UsersService {
    //TODO заглушка. Сделать сущность Users в базе
    private readonly users = [
        {
            id: 1,
            username: 'admin',
            password: 'dmitry3989',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}

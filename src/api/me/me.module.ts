import {Module} from '@nestjs/common';
import {MeController} from './me.controller';
import {MeService} from './me.service';
import {JwtModule} from '@nestjs/jwt';
import {UsersModule} from "../users/users.module";
import {PassportModule} from "@nestjs/passport";

@Module({
    controllers: [MeController],
    providers: [MeService, UsersModule],
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SALT,
            signOptions: {expiresIn: process.env.JWT_TOKEN_LIFETIME},
        }),
    ],
})
export class MeModule {
}

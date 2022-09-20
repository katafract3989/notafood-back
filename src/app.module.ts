import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {RestaurantsModule} from "./api/restaurants/restaurants.module";
import {CategoriesModule} from './api/categories/categories.module';
import {ProductsModule} from './api/products/products.module';
import {ConfigModule} from '@nestjs/config';
import {AuthModule} from './auth/auth.module';
import {UsersService} from './api/users/users.service';
import {UsersModule} from './api/users/users.module';
import {MeModule} from './api/me/me.module';

@Module({
    imports: [ConfigModule.forRoot(), RestaurantsModule, CategoriesModule, ProductsModule, AuthModule, UsersModule, MeModule],
    controllers: [AppController],
    providers: [AppService, UsersService],
})
export class AppModule {
}

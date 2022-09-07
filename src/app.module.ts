import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {RestaurantsModule} from "./api/restaurants/restaurants.module";
import {CategoriesModule} from './api/categories/categories.module';
import {ProductsModule} from './api/products/products.module';
import {ConfigModule} from '@nestjs/config';

@Module({
    imports: [ConfigModule.forRoot(), RestaurantsModule, CategoriesModule, ProductsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}

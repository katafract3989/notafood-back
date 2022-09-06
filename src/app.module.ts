import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {RestaurantsModule} from "./restaurants/restaurants.module";
import {CategoriesModule} from './categories/categories.module';
import {ProductsModule} from './products/products.module';

@Module({
    imports: [RestaurantsModule, CategoriesModule, ProductsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}

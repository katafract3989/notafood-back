import {Controller, Get, Param, Post, Body, Delete, Put} from '@nestjs/common';
import {CreateProductDto} from "./dto/create-product.dto";
import {UpdateProductDto} from "./dto/update-product.dto";
import {ProductsService} from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {
    }

    @Get()
    async getRestaurants() {
        return await this.productsService.getProducts();
    }

    @Get(':id')
    async getRestaurant(@Param('id') id: string) {
        return await this.productsService.getProduct(parseInt(id));
    }

    @Post()
    async create(@Body() createProductDto: CreateProductDto) {
        await this.productsService.create(createProductDto)
    }

    @Put(':id')
    async update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
        await this.productsService.update(parseInt(id), updateProductDto)
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.productsService.remove(parseInt(id))
    }


}

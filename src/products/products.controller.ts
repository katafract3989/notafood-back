import {Controller, Get, Param, Post, Body, Delete, Put} from '@nestjs/common';
import {CreateProductDto} from "../products/dto/create-product.dto";
import {UpdateProductDto} from "../products/dto/update-product.dto";
import {ProductsService} from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {}

    @Get()
    getRestaurants() {
        return this.productsService.getProducts();
    }

    @Get(':id')
    getRestaurant(@Param('id') id: string) {
        return this.productsService.getProduct(parseInt(id));
    }

    @Post()
    create(@Body() createProductDto: CreateProductDto) {
        this.productsService.create(createProductDto)
    }

    @Put(':id')
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
        this.productsService.update(parseInt(id), updateProductDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        this.productsService.remove(parseInt(id))
    }



}

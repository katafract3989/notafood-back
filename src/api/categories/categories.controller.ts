import {Controller, Get, Param, Post, Body, Delete, Put} from '@nestjs/common';
import {CreateCategoryDto} from "./dto/create-category.dto";
import {UpdateCategoryDto} from "./dto/update-category.dto";
import {CategoriesService} from "./categories.service";

@Controller('categories')
export class CategoriesController {

    constructor(private readonly categoriesService: CategoriesService) {}

    @Get()
    getRestaurants() {
        return this.categoriesService.getCategories();
    }

    @Get(':id')
    getRestaurant(@Param('id') id: string) {
        return this.categoriesService.getCategory(parseInt(id));
    }

    @Post()
    create(@Body() createProductDto: CreateCategoryDto) {
        this.categoriesService.create(createProductDto)
    }

    @Put(':id')
    update(@Body() updateCategoryDto: UpdateCategoryDto, @Param('id') id: string) {
        this.categoriesService.update(parseInt(id), updateCategoryDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        this.categoriesService.remove(parseInt(id))
    }



}

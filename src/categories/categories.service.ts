import { Injectable } from '@nestjs/common';
import {AppDataSource} from "../db";
import {Category} from "../categories/entity/category.entity";
import {CreateCategoryDto} from "../categories/dto/create-category.dto";
import {UpdateCategoryDto} from "../categories/dto/update-category.dto";

@Injectable()
export class CategoriesService {

    async getCategories() {
        const result = await AppDataSource.manager.find(Category)
        return {data: result}
    }

    async getCategory(id: number) {
        const result = await AppDataSource.manager.findOneByOrFail(Category, {id: id})
        return {data: result}
    }

    async create(categoryDto: CreateCategoryDto) {
        await AppDataSource.manager.insert(Category, categoryDto)
    }

    async update(id: number, updateCategoryDto: UpdateCategoryDto,) {
        await AppDataSource.manager.update(Category, id, updateCategoryDto)
    }

    async remove(id: number) {
        await AppDataSource.manager.delete(Category, id)
    }

}

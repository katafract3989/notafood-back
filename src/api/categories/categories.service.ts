import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {AppDataSource} from "../../data-source";
import {Category} from "../../entities/category";
import {CreateCategoryDto} from "./dto/create-category.dto";
import {UpdateCategoryDto} from "./dto/update-category.dto";

@Injectable()
export class CategoriesService {

    private categoryRepository = AppDataSource.getRepository(Category)

    async getCategories() {
        const result = await this.categoryRepository.find();
        return {data: result}
    }

    async getCategory(id: number) {
        const result = await this.categoryRepository.findOne({
            relations: {
                products: true
            },
            where: {id: id}
        })

        if (result) {
            return {data: result}
        } else {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                message: 'Категория не найден',
            }, HttpStatus.NOT_FOUND);
        }
    }

    async create(categoryDto: CreateCategoryDto) {

        try {
           await this.categoryRepository.insert(categoryDto)
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: e.sqlMessage,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async update(id: number, updateCategoryDto: UpdateCategoryDto,) {
        await this.categoryRepository.update(id, updateCategoryDto)
    }

    async remove(id: number) {
        await this.categoryRepository.delete(id)
    }

}

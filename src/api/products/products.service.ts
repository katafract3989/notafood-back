import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {AppDataSource} from "../../data-source";
import {Product} from "../../entities/product";
import {CreateProductDto} from "./dto/create-product.dto";
import {UpdateProductDto} from "./dto/update-product.dto";

@Injectable()
export class ProductsService {

    private productRepository = AppDataSource.getRepository(Product)

    async getProducts() {
        const result = await this.productRepository.find();
        return {data: result}
    }

    async getProduct(id: number) {
        const result = await this.productRepository.findOne({
            where: {id: id}
        });
        if (result) {
            return {data: result}
        } else {
            throw new HttpException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Продукт не найден',
            }, HttpStatus.NOT_FOUND);
        }
    }

    async create(productDto: CreateProductDto) {
        try {
            await this.productRepository.insert(productDto);
        } catch (e) {
            throw new HttpException({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: e.sqlMessage,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async update(id: number, updateProductDto: UpdateProductDto,) {
        await this.productRepository.update(id, updateProductDto);
    }

    async remove(id: number) {
        await this.productRepository.delete(id);
    }

}

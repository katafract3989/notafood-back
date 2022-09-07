import { Injectable } from '@nestjs/common';
import {AppDataSource} from "../../db/data-source";
import {Product} from "./entity/product.entity";
import {CreateProductDto} from "./dto/create-product.dto";
import {UpdateProductDto} from "./dto/update-product.dto";

@Injectable()
export class ProductsService {

    async getProducts() {
        const result = await AppDataSource.manager.find(Product);
        return {data: result}
    }

    async getProduct(id: number) {
        const result = await AppDataSource.manager.findOneByOrFail(Product, {id: id});
        return {data: result}
    }

    async create(productDto: CreateProductDto) {
        await AppDataSource.manager.insert(Product, productDto);
    }

    async update(id: number, updateProductDto: UpdateProductDto,) {
        await AppDataSource.manager.update(Product, id, updateProductDto);
    }

    async remove(id: number) {
        await AppDataSource.manager.delete(Product, id);
    }

}

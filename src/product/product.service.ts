import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { ProductDto } from './dto/createproductdto';

@Injectable()
export class ProductsService {
   constructor(@InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>) { }
  
   private Products: ProductEntity[]
   findAll(): Promise <ProductEntity[ ]> {
    return this.productRepository.find();

    }
    findbyId(productId: number){
        return this.productRepository.findOne({where: {id:productId}});
    }

   async createProduct(productDto: ProductDto): Promise<ProductEntity> {
    //    if (user.role == 'admin') {
           return await this.productRepository.save(productDto);

       //
    //    throw new UnauthorizedException();

   }

   async getOne(id:any): Promise<ProductEntity> {
       return this.productRepository.findOneBy (id);
   }

   async update(id: number, productDto: ProductDto): Promise<UpdateResult> {
    //    if (user.role == 'admin') {
           return await this.productRepository.update(id, productDto);
       //}
       throw new UnauthorizedException();
   }

   async delete(id: number, user: User): Promise<DeleteResult> {
    //    if (user.role == 'admin') {
           return await this.productRepository.delete(id);
    //    }
       throw new UnauthorizedException();
   }


  
}
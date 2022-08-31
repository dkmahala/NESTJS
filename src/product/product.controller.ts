import { Controller, Post, Get, Put, Delete, Param, Request, Body, UseGuards, ParseIntPipe } from '@nestjs/common';
import {UpdateResult, DeleteResult} from 'typeorm';
import { ProductsService } from './product.service';
import { ProductEntity } from './product.entity';
// import { LocalAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { ProductDto } from './dto/createproductdto';

@Controller("api/product")
@ApiTags('Products')
export class ProductsController {
 constructor(private productsService: ProductsService) { }

//  @UseGuards(LocalAuthGuard)
 @Get()
 getUsers(): any{
  return this.productsService.findAll();

 }
 @Get(':id')
   getbyId(@Param('id', ParseIntPipe) productId:number) {
        return this.productsService.findbyId(Number(productId));
   }

//  @UseGuards(LocalAuthGuard)
 @Post()
 async Create(@Body() body : ProductDto) {
  return this.productsService.createProduct(body );
 }

//  @UseGuards(LocalAuthGuard)
 @Get(':id')
 async GetOne(@Param() id: number): Promise<ProductEntity> {
   return await this.productsService.getOne(id);

 }

//  @UseGuards(LocalAuthGuard)
 @Put(':id')
 async Update(@Param() id: number, @Body() product: ProductDto, @Request() req): Promise<UpdateResult> {
   return await this.productsService.update(id, product);

 }

//  @UseGuards(LocalAuthGuard)
 @Delete(':id')
 async Delete(@Param() id: number, @Request() req): Promise<DeleteResult> {
   return await this.productsService.delete(id, req.user);

 }
}
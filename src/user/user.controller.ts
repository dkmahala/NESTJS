import { Controller, Post, Get, Put, Delete, Param, Request, Body, UseGuards, Patch, ParseIntPipe } from '@nestjs/common';
import {UpdateResult, DeleteResult} from 'typeorm';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
// import { LocalAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/user.dto';
import { LoginUserDto } from './dto/login.dto';


@Controller('api/user')
@ApiTags('Users')
export class UserController {
   constructor(private usersService: UserService) { }

    @Get()
    getUsers(): any{
        return this.usersService.findAll();
    }
   @Get(':id')
   getbyId(@Param('id', ParseIntPipe) userId:number) {
        return this.usersService.findbyId(Number(userId));
   }
//    @Get(':email')
//    getbyEmail(@Param('email', ParseIntPipe) email:string) {
//         return this.usersService.findbyEmail((email));
//    }

   @Post ()
   createUser(@Body() body : CreateUserDto) {
    return this.usersService.createUser(body );
   }
   

   @Put(':id')
   update(@Body() updateUserDto: CreateUserDto, @Param()  userId: number ) {
    return this.usersService.update(updateUserDto,userId);
   }
   @Delete(':id')
   delete(@Param('id', ParseIntPipe) userId: number){
    return this.usersService.delete(userId);
   }
    
}
import { Injectable, UnauthorizedException,HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>,private jwt: JwtService) { }

    private users: User[]
    findAll(): Promise <User[ ]> {
        return this.userRepository.find();

    }

    findbyId(userId: number){
        return this.userRepository.findOne({where: {id:userId}});
    }
    findOne(email: string){
        return this.userRepository.findOne({where: {email}});
    }
    async createUser(createUserDto: CreateUserDto): Promise<User> {
       const salt = await bcrypt.genSalt();
       const hash = await bcrypt.hash(createUserDto.password, salt);
       createUserDto.password = hash
       return await this.userRepository.save(createUserDto);
   }
    
   

    update( updateUserDto: CreateUserDto,  userId: number){
        return this.userRepository.update(userId,updateUserDto);
    }

   
    delete(userId: number){
        return this.userRepository.delete(userId);
    }

}
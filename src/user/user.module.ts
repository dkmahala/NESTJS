import { JwtModule, JwtService } from '@nestjs/jwt';

// import { JwtStrategy } from '../auth/jwt-strategy';
import { PassportModule } from '@nestjs/passport';
// import { LocalStrategy } from '../auth/local.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Module } from '@nestjs/common';


  @Module({
    imports: [
     TypeOrmModule.forFeature([User])],
     exports:[ UserService],
    providers: [UserService, JwtService],
    controllers: [UserController]
  })

  export class UserModule{}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { ProductEntity } from './product/product.entity';
import { AuthModule } from './auth/auth.module';

// import { AuthController } from './auth/auth.controller';
// import { AuthModule } from './auth/auth.module';



@Module({
  imports: [UserModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'NestAPI',
    entities: [ User,ProductEntity],
    synchronize: false,
    
    autoLoadEntities:true,
   
  }), ProductModule ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { CustomersController } from './customers/customers.controller';
import { UsersController } from './controllers/users/users.controller';
import { ProductsService } from './products/products.service';
import { CustomersService } from './customers/customers.service';
import { ProductsModule } from './products/products.module';
import { TagsModule } from './tags/tags.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProductsModule, TagsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'proyecto',
    entities:[],
    retryDelay:3000,
    autoLoadEntities:true,
    //solo para desarrollo 
    synchronize:true,
    logging:true,
  }), UsersModule],
  controllers: [AppController, ProductsController,CustomersController,UsersController],
  providers: [AppService, ProductsService,CustomersService],
})
export class AppModule{}

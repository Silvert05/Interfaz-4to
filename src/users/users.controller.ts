import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import {users} from './users.entity'
import { UsersService } from './users.service';
import { promises } from 'dns';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get()
    findAll(): Promise<users[]>{
        return this.usersService.findAll();
    }

    @Get(':id') 
     async findOne(@Param('id') id: string): Promise<users> { 
       return this.usersService.findOne(id);
     }

    @Post()
    create (@Body() users: users): Promise<users>{
        return this.usersService.create(users);
    }
    
    @Delete('id')
    async deleteUser(@Param ('id')id:string):Promise<void>{
        return this.usersService.delete(id);
    }
    
    @Put(':id') 
    async updateUser(@Param('id') id: string, @Body() user: Partial<users>): Promise<users> {            
        return this.usersService.update(id, user); 
    }

    @Patch(':id') // Endpoint para actualizar parcialmente un usuario por su id
    async partialUpdateUser(@Param('id') id: string, @Body() user: Partial<users>): Promise<users> {
        return this.usersService.update(id, user); // Llama al método update del servicio

}

}
import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm'
import {users} from './users.entity'

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(users)
        private usersRepository: Repository<users>,
    ) {}

    findAll(): Promise<users[]>{
        return this.usersRepository.find();
    }

    async findOne(id: string): Promise<users> {
        const user = await this.usersRepository.findOne({
            where: { id },  // Busca el usuario por su ID (que ahora es un string)
        });

        if (!user) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        return user; 
    }

    create(user: users): Promise <users> {
        return this.usersRepository.save(user)
    }

    delete(id:string):Promise<void>{
        return this.usersRepository.delete(id).then(()=>{})
    }

    update(id: string, user: Partial<users>): Promise<users> {
        return this.usersRepository.save({ ...user, id });  
    }
    
    updatePartial(id: string, user: Partial<users>): Promise<users> {
        return this.usersRepository.save({ ...user, id }); // Actualiza parcialmente un usuario por su ID
    }
}
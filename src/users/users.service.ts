import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>,

    ){}
    findAll(): Promise<User[]>{
        return this.userRepository.find();
    }
    async findOne(id:number): Promise<User> {
        const user= await this.userRepository.findOneBy({id});
        if (!user){
            throw new NotFoundException(`usuario con ID:  ${id} no encontrado`)
        }
        return  user;

    }
    create(user: User):Promise<User>{
        return this.userRepository.save(user);
    }
}

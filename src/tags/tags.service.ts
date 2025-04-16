import { Injectable, NotFoundException } from '@nestjs/common';
import { Tag } from './tag/tag.interface';
import { TagDto } from './dto/tag.dto/tag.dto';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class TagsService {
    private tags :Tag[]=[];

    getId(id:string):Tag{
        const tag =this.tags.find(tags =>tag.id == id);
        if(!tag){
            throw new NotFoundException(`Tag con id ${id} no encontrado  `)
        }
        return tag
    }
    async insert(tadDto: TagDto):Promise <Tag>{
        const tag: Tag ={
            id:uuidv4(),
            name:tadDto.name,
            description:tadDto.description,
            stock:tadDto.stock,
            slug:tadDto.slug,

        };
        this.tags.push(tag);
        return tag
    }


}

import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe, ValidationPipeOptions } from '@nestjs/common';
import { TagDto } from './dto/tag.dto/tag.dto';
import { Tag } from './tag/tag.interface';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {

    constructor(private readonly tagsService:TagsService){}
    // uso de  validacione pipe  por  ruta  
     @Post()
     @UsePipes(new  ValidationPipe())
     post(@Body () body:TagDto):Promise <Tag>{ 
        return this.tagsService.insert(body);

     }

     //use get  en errores personalizados 

     @Get(':id')
     async find (@Param('id') id: string){
        console.log(id ,typeof id);
        return this.tagsService.getId(id);
     }
}

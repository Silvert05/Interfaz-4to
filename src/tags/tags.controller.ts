import { Body, Controller, Get, Patch, Delete , Put , Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import {TagsService} from './tags.service'
import { TagDto } from './dto/tag.dto';
import { Tag } from './tag/tag.interface';

@Controller('tags')
export class TagsController {
    constructor(private readonly tagsService: TagsService) {}

    @Get('slug/:slug')
    async findBySlug(@Param('slug') slug: string): Promise<Tag[]> {
        return this.tagsService.findBySlug(slug); // ← Ahora sí, devuelve un array
    }
    // Método para obtener todos los tags
    @Get()
    async findAll(): Promise<Tag[]> {
        return this.tagsService.getAll();  // Usa el servicio para obtener los tags
    }

    // Obtener un tag por ID
    @Get(':id')
    async find(@Param('id') id: string) {
        return this.tagsService.getId(id);
    }

    // Crear un nuevo tag
    @Post()
    @UsePipes(new ValidationPipe())
    async post(@Body() body: TagDto): Promise<Tag> {
        return this.tagsService.insert(body);
    }

    // Actualizar un tag completamente (PUT)
    @Put(':id')
    @UsePipes(new ValidationPipe())
    async update(@Param('id') id: string, @Body() body: TagDto): Promise<Tag> {
        return this.tagsService.update(id, body);
    }

    // Actualizar parcialmente un tag (PATCH)
    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async partialUpdate(@Param('id') id: string, @Body() body: Partial<TagDto>): Promise<Tag> {
        return this.tagsService.partialUpdate(id, body);
    }

    // Eliminar un tag por ID (DELETE)
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.tagsService.delete(id);
    }
}

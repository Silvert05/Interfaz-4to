import { Injectable, NotFoundException } from '@nestjs/common';
import { TagDto } from './dto/tag.dto';
import {v4 as uuidv4} from 'uuid';
import {Tag} from './tag/tag.interface';

@Injectable()
export class TagsService {
    private tags: Tag[] = [];  // En memoria (idealmente esto debería estar en una base de datos)

    // Obtener todos los tags
    getAll(): Tag[] {
        return this.tags;
    }

    // Obtener un tag por ID
    getId(id: string): Tag {
        const tag = this.tags.find(tag => tag.id === id);
        if (!tag) {
            throw new NotFoundException(`Tag con id ${id} no encontrado`);
        }
        return tag;
    }

    // Insertar un nuevo tag
    async insert(tagDto: TagDto): Promise<Tag> {
        const tag: Tag = {
            id: uuidv4(),  // Genera un ID único con UUID
            name: tagDto.name,
            description: tagDto.description,
            stock: tagDto.stock,
            slug: tagDto.slug,
        };
        this.tags.push(tag);  // Guarda el nuevo tag en el array
        return tag;
    }

    // Actualizar un tag completamente (PUT)
    update(id: string, tagDto: TagDto): Tag {
        const index = this.tags.findIndex(tag => tag.id === id);
        if (index === -1) {
            throw new NotFoundException(`Tag con id ${id} no encontrado`);
        }
        this.tags[index] = { id, ...tagDto };  // Actualiza todos los campos del tag
        return this.tags[index];
    }

    // Actualizar parcialmente un tag (PATCH)
    partialUpdate(id: string, tagDto: Partial<TagDto>): Tag {
        const tag = this.getId(id);  // Obtiene el tag por ID
        const updatedTag = { ...tag, ...tagDto };  // Actualiza solo los campos que vienen en tagDto
        const index = this.tags.findIndex(tag => tag.id === id);
        this.tags[index] = updatedTag;  // Reemplaza el tag en el array
        return updatedTag;
    }

    // Eliminar un tag por ID
    delete(id: string): void {
        const index = this.tags.findIndex(tag => tag.id === id);
        if (index === -1) {
            throw new NotFoundException(`Tag con id ${id} no encontrado`);
        }
        this.tags.splice(index, 1);  // Elimina el tag de la lista
    }

    findBySlug(slug: string): Tag[] {
        const tags = this.tags.filter(tag => tag.slug === slug);
        if (!tags.length) {
            throw new NotFoundException(`No se encontraron tags con slug "${slug}"`);
        }
        return tags;
}
 }
import { IsDefined, IsInt, IsOptional, IsString, Matches, MaxLength, Min, MinLength } from "class-validator";

export class TagDto {

    // Nombre
    @IsDefined({ message: 'El nombre es obligatorio' }) // Valida que no sea vacío
    @IsString({ message: 'El nombre debe ser una cadena de texto' })
    @MinLength(1, { message: 'El nombre no puede estar vacío' }) // Valida longitud mínima
    @Matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, {
        message: 'El nombre solo debe contener letras y espacios', // Valida que solo tenga letras y espacios
    })
    name: string;

    // Descripción
    @IsDefined({ message: 'La descripción es obligatoria' })
    @IsString({ message: 'La descripción debe ser una cadena de texto' })
    @MaxLength(10, { message: 'La descripción debe tener como máximo 10 caracteres' })
    @MinLength(1, { message: 'La descripción no puede estar vacía' })
    @Matches(/\S/, { message: 'La descripción no puede contener solo espacios' })

    description: string;

    // Stock (debe ser un número entero)
    @IsDefined({ message: 'El stock es obligatorio' })
    @IsInt({ message: 'El stock debe ser un número entero' })
    @Min(0, { message: 'El stock debe ser 0 o más de 0' })
    stock: number;

    // Slug (opcional pero con validaciones)
    @IsOptional()
    @IsString({ message: 'El slug debe ser una cadena de texto' })
    @MinLength(1, { message: 'El slug no puede estar vacío' })
    @Matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, {
        message: 'El slug solo debe contener letras y espacios',
    })
    slug?: string;
}

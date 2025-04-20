import { IsInt, IsString, Matches, MaxLength, Min, MinLength } from "class-validator";

export class TagDto {
    @IsString()
    @MaxLength(30)
    @MinLength(0, {message: 'No se puede enviar vacio'})
    @Matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,{
        message : 'El nombre solo debe contener letras y espacios',
    })
    name: string;

    @IsString()
    @MaxLength(100)
    @MinLength(0, {message: 'No se puede enviar vacio'})
    description: string;

    @IsInt({message: 'El stock debe ser un numero entero'})
    @Min(0, {message: 'El stock debe ser 0 o mas de 0'})
    stock: number;

    @IsString()
    @MinLength(0, {message: 'No se puede enviar vacio'})
    @Matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,{
        message : 'El nombre solo debe contener letras y espacios',
    })
    slug?: string;
}

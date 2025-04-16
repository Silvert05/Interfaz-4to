import { IsInt, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class TagDto {
    @IsString()
    @MaxLength(30)
    @MinLength(0)
    @Matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
        {message: 'El nombre solo debe contener letras y espacios'})
        name: string;
    
    @IsString()
    @MaxLength(100)
    @MinLength(0, {message: 'No se  puede enviar vacio'})
    description: string;

    @IsString()
    @MinLength(0 ,{message: 'No se  puede enviar vacio'})
    @Matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
        {message: 'El nombre solo debe contener letras y espacios'})
    slug?: string;


    @IsInt({message: 'El stock debe ser un  numero entero'})
    @IsString()
    @MaxLength(100)
    @MinLength(0, {message: 'No se  puede enviar vacio'})
    stock: string;

    

}
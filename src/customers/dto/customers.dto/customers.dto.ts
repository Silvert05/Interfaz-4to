import { Type } from "class-transformer";
import { IsDate, IsInt, IsString, Matches } from "class-validator";

export class CustomersDto {
        
    @IsString()
    @Matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, {message : 'El nombre solo debe contener letras y espacios'})
    name: string;

    @Type(() => Number)
  @IsInt({ message: 'La edad debe ser un número entero' })
  @Matches(/^\d+$/, { message: 'La edad debe contener solo números' })
  age: number;

    @Type(() => Date)
    @IsDate({ message: 'La fecha de nacimiento debe tener el formato AAAA-MM-DD' })
    birthday: Date;

    @IsString({message: 'colocar  su lugar de recidencia completa '})
    recidence:string;

}

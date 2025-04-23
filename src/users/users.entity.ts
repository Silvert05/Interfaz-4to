import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, IsString, IsDateString, IsInt, Min } from 'class-validator';

@Entity()
export class users {
    
    @PrimaryGeneratedColumn('uuid')
    id: string; // uuidv4

    @Column()
    @IsNotEmpty()
    @IsString()
    name: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    last_name: string;

    @Column()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Column()
    @IsNotEmpty()
    @IsDateString()  // Para que se valide como una fecha en formato ISO
    birthday: string;

    @Column()
    @IsNotEmpty()
    @IsInt()  // Aseguramos que es un número entero
    @Min(10000000)  // Este es un ejemplo de un mínimo para la identificación (puedes ajustarlo según el caso)
    identification: number;
}
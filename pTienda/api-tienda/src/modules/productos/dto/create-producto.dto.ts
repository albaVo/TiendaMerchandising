import { IsArray, IsIn, IsInt, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateProductoDto {
    @IsString()
    @MinLength(1)
    codigo: string;

    @IsString()
    @MinLength(3)
    nombre: string;

    @IsString()
    @IsOptional()
    thumbnail?: string;

    @IsString()
    @MinLength(1)
    tipo: string;

    // @IsOptional()
    // tallas?: string[];

    @IsString()
    precio: string;

    @IsIn(['DISPONIBLE', 'NO DISPONIBLE'])
    estado: string;

    @IsString()
    stock: string;

    @IsString()
    codigoCategoria?: string;
}

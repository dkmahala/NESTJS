import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";


export class ProductDto{
    id: number;
    @ApiProperty()
    @IsString()//for validation
    pname: string;
    
    @ApiProperty()
    category: any;

    @ApiProperty()
    @IsNumber()
    price: number;
    
    @ApiProperty()
    @IsString()
    description: string;

}
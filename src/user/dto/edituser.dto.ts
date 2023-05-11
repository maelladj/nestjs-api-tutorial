import { IsNotEmpty, IsString } from "class-validator"

export class EditUserDto {
    @IsString()
    @IsNotEmpty()
    lastName: string
    
    @IsString()
    @IsNotEmpty()
    firstName: string
}
import { IsNotEmpty, MaxLength } from "class-validator";
import { isArray, isString } from "util";

export class CreateCompanyDto {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    url: string

    @IsNotEmpty()
    address: string

    @IsNotEmpty()
    houseNumber: string

    @IsNotEmpty()
    postCode: string

    @IsNotEmpty()
    kvkNumber: string

    @IsNotEmpty()
    city: string

    @IsNotEmpty()
    country: string

  
    @MaxLength(20,{each:true})
    @IsNotEmpty()
    services: Set<string>

    extraInfo: string

    @MaxLength(10,{each:true})
    @IsNotEmpty()
    openHours: Set<string>

}
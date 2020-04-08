import { MinLength, MaxLength, IsString, Matches, IsIn } from "class-validator";
import { RolesEnum } from "../user.roles.enum";

export class AuthCredantialsDto {

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @MinLength(4)
    @MaxLength(8)
    password: string;

    @IsIn([RolesEnum.Admin, RolesEnum.Company, RolesEnum.User],{message:"Add correct roles"})
    roles: RolesEnum
}
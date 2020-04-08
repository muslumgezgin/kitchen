import { RolesEnum } from "./user.roles.enum";

export interface JwtPayload {
    username: string;
    roles:RolesEnum
}

import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { RolesEnum } from '../user.roles.enum';

@Injectable()
export class CompanyGuard implements CanActivate {
    constructor() { }

    canActivate(context: ExecutionContext): boolean {

        const request = context.switchToHttp().getRequest();
        const user = request.user;

        if (user && (user.roles === RolesEnum.Admin || user.roles === RolesEnum.Company)) {
            return true
        }
        throw new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED)
    }
}

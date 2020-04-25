import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesEnum } from './user.roles.enum';
import { AuthCredantialsDto } from './dto/auth-credetials.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(@InjectRepository(UserRepository)
    private userRepository: UserRepository) {
        super()
    }

    async validate(username: string) {
        console.log(username);
        const user = await this.userRepository.validateUser(username);
        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}
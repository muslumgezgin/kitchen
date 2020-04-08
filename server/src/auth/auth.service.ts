import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredantialsDto } from './dto/auth-credetials.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload-interface';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService,
    ) { }

    async sigUp(authCredentialsDto: AuthCredantialsDto): Promise<void> {
        return this.userRepository.signup(authCredentialsDto);
    }

    async sigIn(authCredentialsDto: AuthCredantialsDto): Promise<{ accessToken: string }> {
        const { username,roles } = await this.userRepository.validateUserPassword(authCredentialsDto);

        if (!username) {
            throw new UnauthorizedException('invalid credentials');
        }

        const payload: JwtPayload = { username,roles };
        const accessToken = await this.jwtService.sign(payload);
        return { accessToken };
    }
}

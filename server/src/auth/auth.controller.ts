import { Controller, Post, Body, ValidationPipe, Get, Render } from '@nestjs/common';
import { AuthCredantialsDto } from './dto/auth-credetials.dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }
    @Post('/signup')
    signUp(@Body(ValidationPipe) authCredantialsDto: AuthCredantialsDto): Promise<void> {
        return this.authService.sigUp(authCredantialsDto);
    }


    @Post('/signin')
    signIp(@Body(ValidationPipe) authCredantialsDto: AuthCredantialsDto): Promise<{ accessToken: string }> {
        return this.authService.sigIn(authCredantialsDto);
    }

    @Get('/index')
    @Render('index')
    root() {
      return { message: 'Hello wordsadsald!' };
    }

}

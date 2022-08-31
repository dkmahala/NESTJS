import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDto } from 'src/user/dto/login.dto';
import { UserService } from 'src/user/user.service';

@Controller('api/auth')
export class AuthController {
    constructor(private userService: UserService) {}

    @Post()

    login(@Body() loginDto: LoginUserDto) {
        return this.userService.findOne(loginDto.email);
    }
}

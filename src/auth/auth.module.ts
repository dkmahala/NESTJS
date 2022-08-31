import { Module } from '@nestjs/common';

import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';

@Module({
  imports: [UserModule, UserService, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
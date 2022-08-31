import { Injectable } from "@nestjs/common";
import { User } from "src/user/entities/user.entity";
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from "../user/user.service";


@Injectable()
export class AuthService {
  constructor(private usersService: UserService, private jwt: JwtService) {}

async validateUser(email: string, password: string): Promise<any> {

    const existingUser = await this.usersService.findOne(email);
    if (existingUser) {
        if (await bcrypt.compare(password, existingUser.password)) {
            const { password, ...result } = existingUser
            return result;
        }

        return null;
    }
    return null

    }
    async login(user: any) {
        const payload = { username: user.email, sub: user.id, role:user.role };

        return {
            access_token: this.jwt.sign(payload),
        };
    }
 }
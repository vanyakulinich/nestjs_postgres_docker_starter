import { Injectable } from '@nestjs/common'
import { CreateUserDto } from 'src/user/dto/user.dto'
import { UserService } from 'src/user/user.service'
import { AuthResponse } from './dto/auth-response'
import { SigninUserDto } from './dto/signin-user.dto'

@Injectable()
export class AuthService {
  // constructor(private readonly userService: UserService) {}

  async signup(createUserDto: CreateUserDto): Promise<AuthResponse> {
    // TODO
    // const user = await this.userService.create(createUserDto)
    return {
      jwt: '',
    }
  }

  async signin(signinUserDto: SigninUserDto): Promise<AuthResponse> {
    // TODO
    return {
      jwt: '',
    }
  }
}

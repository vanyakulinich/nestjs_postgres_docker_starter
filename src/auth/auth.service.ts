import { Injectable } from '@nestjs/common'
import { PasswordService } from 'src/common/services/password.service'
import { CreateUserDto } from 'src/user/dto/user.dto'
import { User } from 'src/user/entity/user.entity'
import { UserService } from 'src/user/user.service'
import { AuthResponse } from './dto/auth-response'
import { SigninUserDto } from './dto/signin-user.dto'

/**
 * Auth Service
 */
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly passwordService: PasswordService,
  ) {}

  /**
   * Validate user when signin
   * @param email: string
   * @param pass: string
   * @returns Promise<User | null>
   */
  async validateUser(email: string, pass: string): Promise<User | null> {
    const user = await this.userService.findOneByEmail(email)
    if (!user) return null
    const isPasswordMatch = await this.passwordService.comparePassword(user.password, pass)
    return isPasswordMatch ? user : null
  }

  // TODO docs + jwt sign
  async signup(createUserDto: CreateUserDto): Promise<AuthResponse> {
    // TODO
    // const user = await this.userService.create(createUserDto)
    return {
      jwt: '',
    }
  }
  //  TODO:
  async signin(signinUserDto: SigninUserDto): Promise<AuthResponse> {
    // TODO
    return {
      jwt: '',
    }
  }
}

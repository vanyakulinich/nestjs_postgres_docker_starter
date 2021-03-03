import { Controller, Post } from '@nestjs/common'
import { ApiConflictResponse, ApiNotFoundResponse } from '@nestjs/swagger'
import { ApiDoc } from 'src/common/decorators/api-doc.decorator'
import { CreateUserDto } from 'src/user/dto/user.dto'
import { AuthService } from './auth.service'
import { AuthResponse } from './dto/auth-response'
import { SigninUserDto } from './dto/signin-user.dto'

/**
 * Auth Controller
 */
ApiDoc('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Signin existing user
   * @param signinUserDto: SigninUserDto
   * @returns Promise<AuthResponse>
   */
  @Post('signin')
  @ApiNotFoundResponse({ description: 'Not found' })
  async signin(signinUserDto: SigninUserDto): Promise<AuthResponse> {
    return await this.authService.signin(signinUserDto)
  }

  /**
   * SIgnup new user
   * @param createUserDto: CreateUserDto
   * @returns Promise<AuthResponse>
   */
  @Post('signup')
  @ApiConflictResponse({ description: 'Already exists' })
  async signup(createUserDto: CreateUserDto): Promise<AuthResponse> {
    return await this.authService.signup(createUserDto)
  }
}

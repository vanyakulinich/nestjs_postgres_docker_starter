import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { ApiConflictResponse, ApiNotFoundResponse } from '@nestjs/swagger'
import { ApiDoc } from 'src/common/decorators/api-doc.decorator'
import { CreateUserDto } from 'src/user/dto/user.dto'
import { AuthService } from './auth.service'
import { AuthResponse } from './dto/auth-response'
import { SigninUserDto } from './dto/signin-user.dto'
import { PublicRoute } from '../common/decorators/public-route.decorator'
import { LocalAuthGuard } from './guards/local-auth.guard'

/**
 * Auth Controller
 */
@ApiDoc({ tag: 'auth', isPublic: true })
@PublicRoute()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Signin existing user
   * @param signinUserDto: SigninUserDto
   * @returns Promise<AuthResponse>
   */
  // TODO: add validate body guard
  @UseGuards(LocalAuthGuard)
  @Post('signin')
  @ApiNotFoundResponse({ description: 'Not found' })
  async signin(@Body() signinUserDto: SigninUserDto): Promise<AuthResponse> {
    return await this.authService.signin(signinUserDto)
  }

  /**
   * Signup new user
   * @param createUserDto: CreateUserDto
   * @returns Promise<AuthResponse>
   */
  @Post('signup')
  @ApiConflictResponse({ description: 'Already exists' })
  async signup(@Body() createUserDto: CreateUserDto): Promise<AuthResponse> {
    return await this.authService.signup(createUserDto)
  }
}

import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common'
import { ApiConflictResponse, ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger'
import { ApiDoc } from 'src/common/decorators/api-doc.decorator'
import { CreateUserDto } from 'src/user/dto/user.dto'
import { AuthService } from './auth.service'
import { AuthResponse } from './dto/auth-response'
import { SigninUserDto } from './dto/signin-user.dto'
import { PublicRoute } from '../common/decorators/public-route.decorator'
import { LocalAuthGuard } from './guards/local-auth.guard'
import { ValidateBodyGuard } from 'src/common/guards/validate-body.guard'

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
   * @param req: Request
   * @returns AuthResponse
   */
  @UseGuards(new ValidateBodyGuard(SigninUserDto), LocalAuthGuard)
  @Post('signin')
  @ApiNotFoundResponse({ description: 'Not found' })
  signin(@Body() signinUserDto: SigninUserDto, @Request() req): AuthResponse {
    return this.authService.signin(req.user)
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

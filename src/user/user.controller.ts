import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common'
import { ApiNotFoundResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger'
import { IJwtUser } from 'src/auth/interfaces/jwt-interface'
import { ApiDoc } from 'src/common/decorators/api-doc.decorator'
import { UserFromRequest } from 'src/common/decorators/user-from-request.decorator'
import { UpdateUserDto } from './dto/user.dto'
import { User } from './entity/user.entity'
import { UserService } from './user.service'

/**
 * Basic User Controller
 */
@ApiDoc({ tag: 'users' })
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Find All Users
   * @returns Promise<User[]>
   */
  @Get()
  @ApiOperation({ description: 'Find all users' })
  async findAll(): Promise<User[]> {
    return await this.userService.findAll()
  }

  /**
   * Find User By userId
   * @param userId: string
   * @returns Promise<User>
   */
  @Get(':userId')
  @ApiOperation({ description: 'Find user by userId' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  async findOne(@Param('userId', ParseUUIDPipe) userId: string): Promise<User> {
    return await this.userService.findOne(userId)
  }

  /**
   * Update authorized user
   * @param updateUserDto: UpdateUserDto
   * @param user IJwtUser
   * @returns Promise<User>
   */
  @Patch()
  @ApiOperation({ description: 'Update user' })
  async update(
    @Body() updateUserDto: UpdateUserDto,
    @UserFromRequest() user: IJwtUser,
  ): Promise<User> {
    return await this.userService.update(updateUserDto, user.id)
  }

  /**
   * Delete user
   * @param user: IJwtUser
   * @returns Promise<void>
   */
  @Delete()
  @ApiOperation({ description: 'Delete user' })
  @ApiOkResponse({ description: 'Ok' })
  async delete(@UserFromRequest() user: IJwtUser): Promise<void> {
    return await this.userService.delete(user.id)
  }

  // add more routes handlers here
}

import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common'
import { ApiNotFoundResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger'
import { ApiDoc } from 'src/common/decorators/api-doc.decorator'
import { UpdateUserDto } from './dto/user.dto'
import { User } from './entity/user.entity'
import { UserService } from './user.service'

/**
 * Basic User Controller
 */
@ApiDoc('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Find All Users
   */
  @Get()
  @ApiOperation({ description: 'Find all users' })
  async findAll(): Promise<User[]> {
    return await this.userService.findAll()
  }

  /**
   * Find User By userId
   * @param userId: string
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
   */
  @Patch()
  @ApiOperation({ description: 'Update user' })
  async update(@Body() updateUserDto: UpdateUserDto): Promise<User> {
    // TODO: add userID
    return await this.userService.update(updateUserDto, '')
  }

  /**
   * Delete user
   */
  @Delete()
  @ApiOperation({ description: 'Delete user' })
  @ApiOkResponse({ description: 'Ok' })
  async delete(): Promise<void> {
    // TODO: add service call when auth implemented
  }

  // add more routes handlers here
}

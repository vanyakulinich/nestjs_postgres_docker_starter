import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common'
import { ApiNotFoundResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { ApiDoc } from 'src/common/decorators/api-doc.decorator'
import { User } from './entity/user.entity'
import { UserService } from './user.service'

/**
 * Basic User Controller
 */
@ApiDoc('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ description: 'Find all users' })
  async findAll(): Promise<User[]> {
    return await this.userService.findAll()
  }

  @Get(':userId')
  @ApiOperation({ description: 'Find user by userId' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  async findOne(@Param('userId', ParseUUIDPipe) id: string): Promise<User> {
    return await this.userService.findOne(id)
  }

  async create(): Promise<any> {
    // TODO
  }

  async update(): Promise<any> {
    // TODO
  }

  async delete(): Promise<any> {
    // TODO
  }

  // add more routes handlers here
}

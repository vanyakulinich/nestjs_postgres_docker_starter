import { PartialType } from '@nestjs/swagger'
import { IsEmail, IsString, MinLength } from 'class-validator'

class BasicUserDto {
  @IsEmail()
  email: string

  @IsString()
  firstName: string

  @IsString()
  lastName: string
}

export class CreateUserDto extends BasicUserDto {
  @IsString()
  @MinLength(6)
  password: string
}

export class UpdateUserDto extends PartialType(BasicUserDto) {}

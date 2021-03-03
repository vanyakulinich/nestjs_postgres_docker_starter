import { ApiResponseProperty } from '@nestjs/swagger'

export class AuthResponse {
  @ApiResponseProperty()
  jwt: string
}

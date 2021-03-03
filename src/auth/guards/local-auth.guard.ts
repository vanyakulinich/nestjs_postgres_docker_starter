import { Injectable, NotFoundException } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  constructor() {
    super()
  }

  handleRequest(err, user, info) {
    // throw an exception based on either "info" or "err" arguments
    if (err || !user) {
      throw err || new NotFoundException('User not found')
    }
    return user
  }
}

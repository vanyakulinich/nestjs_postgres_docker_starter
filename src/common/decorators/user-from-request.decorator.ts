import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { IJwtUser } from 'src/auth/interfaces/jwt-interface'
import { User } from 'src/user/entity/user.entity'

export const UserFromRequest = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): IJwtUser => {
    const request = ctx.switchToHttp().getRequest()
    return request.user
  },
)

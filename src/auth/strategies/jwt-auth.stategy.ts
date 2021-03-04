import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { User } from 'src/user/entity/user.entity'
import { ConfigService } from '@nestjs/config'
import { IJwtPayload, IJwtUser } from '../interfaces/jwt-interface'

/**
 * Passport JWT Strategy
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('app.jwtSecret'),
    })
  }

  validate(payload: IJwtPayload): IJwtUser {
    return { id: payload.id, email: payload.email }
  }
}

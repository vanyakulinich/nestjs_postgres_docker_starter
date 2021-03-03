export interface IJwtUser {
  id: string
  email: string
}

export interface IJwtPayload extends IJwtUser {
  iat: number
  exp: number
}

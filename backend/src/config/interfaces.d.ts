import { ObjectSchema as JoiObjectSchema } from '@hapi/joi'

export interface IAppConfigOptions {
  isGlobal?: boolean
  envFilePath: string
  validationSchema: JoiObjectSchema<{
    PORT: number
    POSTGRES_USER: string
    POSTGRES_PASSWORD: string
    POSTGRES_DB: string
    POSTGRES_HOST: string
    POSTGRES_PORT: number
  }>
}

import * as Joi from '@hapi/joi'
import { IAppConfigOptions } from './interfaces'

export const appConfigOptions: IAppConfigOptions = {
  isGlobal: true,
  envFilePath: `.env.${process.env.NODE_ENV || 'development'}`, // dev by default
  validationSchema: Joi.object({
    PORT: Joi.number().default(5000),
    POSTGRES_USER: Joi.string().required(),
    POSTGRES_PASSWORD: Joi.string().required(),
    POSTGRES_DB: Joi.string().required(),
    POSTGRES_HOST: Joi.string().required(),
    POSTGRES_PORT: Joi.number().default(5432),
  }),
}

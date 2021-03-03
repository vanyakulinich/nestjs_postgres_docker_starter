import { applyDecorators } from '@nestjs/common'
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiTags } from '@nestjs/swagger'

export const ApiDoc = (tag: string) =>
  applyDecorators(
    ApiTags(tag),
    ApiBadRequestResponse({ description: 'Bad Request' }),
    ApiInternalServerErrorResponse({ description: 'Internal Server Error' }),
  )

import { applyDecorators } from '@nestjs/common'
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger'

export const ApiDoc = ({ tag = '', isPublic = false }: { tag: string; isPublic?: boolean }) => {
  const decorators = [
    ApiTags(tag),
    ApiBadRequestResponse({ description: 'Bad Request' }),
    ApiInternalServerErrorResponse({ description: 'Internal Server Error' }),
  ]

  if (!isPublic) decorators.push(ApiBearerAuth())

  return applyDecorators(...decorators)
}

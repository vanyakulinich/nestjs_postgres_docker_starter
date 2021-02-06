import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const API_PREFIX = 'api' // global prefix for api
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix(API_PREFIX)

  // Setting up Swagger document
  const options = new DocumentBuilder()
    .setTitle('FilesHub API')
    .setDescription('FilesHub application API docs')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  /** NOTE:
   * Swagger uses plugin for auto generate of api docs and reduce swagger decorators in code.
   * plugin config is specified in nest-cli.json
   */
  SwaggerModule.setup(`${API_PREFIX}/docs`, app, document)

  await app.listen(process.env.PORT)
}
bootstrap()

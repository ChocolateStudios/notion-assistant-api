import { NestFactory } from '@nestjs/core';
import { MainAppModule } from './mainapp.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as morgan from 'morgan';
import { CORS } from './_common/constants';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(MainAppModule);

  app.use(morgan('dev'));
  app.setGlobalPrefix('api/v1');
  app.enableCors(CORS);

  const config = new DocumentBuilder()
    .setTitle('Notion Assistant API')
    .setDescription('The Notion Assistant API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    // explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration: true
    }
  });

  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT'));
  console.log(`Application running on: ${await app.getUrl()}`);
}
bootstrap();

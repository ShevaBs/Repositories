import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { constants } from './config/constants';
import { Logger } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import swaggerConfig from './config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = app.get(ConfigService);
  const PORT = config.get<number>(constants.port);
  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api', app, document);

  await app.listen(PORT, () => {
    Logger.log(`Started at http://localhost:${PORT}`, 'START');
  });
}
bootstrap();

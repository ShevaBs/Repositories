import { DocumentBuilder } from '@nestjs/swagger';

export default new DocumentBuilder()
  .setTitle('Repository app')
  .setDescription('Repository API')
  .setVersion('1.0')
  .build();

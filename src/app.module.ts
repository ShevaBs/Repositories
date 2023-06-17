import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/default';
import { RepositoryModule } from './repository/repository.module';

@Module({
  imports: [
    RepositoryModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [],
})
export class AppModule {}

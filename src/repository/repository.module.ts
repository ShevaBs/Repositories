import { Module } from '@nestjs/common';
import { RepositoryService } from './repository.service';
import { RepositoryController } from './repository.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  imports: [],
  controllers: [RepositoryController],
  providers: [RepositoryService, DatabaseService],
})
export class RepositoryModule {}

import { BadRequestException, Injectable } from '@nestjs/common';
import { RepositoryDto } from './dto/repository.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class RepositoryService {
  constructor(private database: DatabaseService) {}

  async create(payload: RepositoryDto) {
    const repository = await this.database.repository.create({
      data: payload,
    });

    return repository;
  }

  async getAll() {
    const repositories = await this.database.repository.findMany();
    return repositories;
  }

  async getById(id: string) {
    const repository = await this.database.repository.findUnique({
      where: { id },
    });

    if (!repository) {
      throw new BadRequestException('Repository with this id does not exist');
    }

    return repository;
  }

  async updateById(id: string, payload: RepositoryDto) {
    const updatedRepository = await this.database.repository.update({
      where: { id },
      data: payload,
    });

    return updatedRepository;
  }

  async deleteById(id: string) {
    const deletedRepository = await this.database.repository.delete({
      where: { id },
    });

    return deletedRepository;
  }
}

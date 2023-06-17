import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { RepositoryDto } from './dto/repository.dto';
import { RepositoryService } from './repository.service';
import { ApiResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Repository } from './entities/repository.entity';

@ApiTags('Repository Controller')
@Controller('repository')
export class RepositoryController {
  constructor(private readonly repositoryService: RepositoryService) {}

  @Post()
  @ApiOperation({ summary: 'Create repository' })
  @ApiResponse({
    status: 201,
    type: Repository,
  })
  create(@Body() body: RepositoryDto) {
    return this.repositoryService.create(body);
  }

  @Get()
  @ApiOperation({ summary: 'Get all repositories' })
  @ApiResponse({
    status: 200,
    type: Repository,
  })
  getAll() {
    return this.repositoryService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get repository by id' })
  @ApiResponse({
    status: 200,
    type: Repository,
  })
  getById(@Param('id') id: string) {
    return this.repositoryService.getById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update repository by id' })
  @ApiResponse({
    status: 200,
    type: Repository,
  })
  updateById(@Param('id') id: string, @Body() body: RepositoryDto) {
    return this.repositoryService.updateById(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete repository by id' })
  @ApiResponse({
    status: 200,
    type: Repository,
  })
  deleteById(@Param('id') id: string) {
    return this.repositoryService.deleteById(id);
  }
}

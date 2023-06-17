import { ApiProperty } from '@nestjs/swagger';

export class Repository {
  @ApiProperty({
    example: 'fe5614dc-f565-43db-ac87-5849fb97b3be',
    description: 'Repository id',
  })
  id: string;

  @ApiProperty({
    example: 'This is repository name',
    description: 'Name of repository',
  })
  name: string;

  @ApiProperty({
    example: 'This is description',
    description: 'Description of repository',
  })
  description: string;

  @ApiProperty({
    example: 5,
    description:
      'Starring a repository shows appreciation to the repository maintainer for their work.',
  })
  stars: number;

  @ApiProperty({
    example: 'John Doe',
    description: 'Creator name of repository',
  })
  creatorName: string;

  @ApiProperty({
    example: '2023-02-12',
    description: 'Date of creation repository',
  })
  createdAt: string;
}

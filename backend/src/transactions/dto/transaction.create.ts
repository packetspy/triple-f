import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TransactionCreateDto {
  @ApiPropertyOptional({
    example: 'Description',
  })
  readonly description: string;

  @ApiProperty()
  readonly date: Date;

  @ApiProperty({
    example: '02/02/2023',
  })
  readonly amount: number;

  @ApiProperty()
  readonly type: number;

  @ApiProperty()
  readonly consolidated: boolean;
}

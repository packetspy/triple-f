import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TransactionsService } from './transaction.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TransactionRO } from './transaction.interface';
import { TransactionCreateDto } from './dto/transaction.create';

@Controller('transaction')
export class TransactionsController {
  constructor(private readonly transactionService: TransactionsService) {}

  @ApiOperation({ summary: 'Get all transactions' })
  @ApiResponse({ status: 200, description: 'Return all Transactions.' })
  @Get()
  async findAll(@Query() query): Promise<TransactionRO> {
    return await this.transactionService.findAll(query);
  }

  @ApiOperation({ summary: 'Create transaction' })
  @ApiResponse({ status: 201, description: 'The transaction has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  async create(@Body() transactionData: TransactionCreateDto) {
    return this.transactionService.create(transactionData);
  }
}

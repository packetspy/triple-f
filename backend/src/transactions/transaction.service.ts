import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { TransactionCreateDto } from './dto/transaction.create';

@Injectable()
export class TransactionsService {
  constructor() {}

  prisma = new PrismaClient();

  async findAll(query): Promise<any> {
    let transactions = await this.prisma.transaction.findMany({
      where: {},
      orderBy: { createdAt: 'desc' },
    });

    const transactionCount = await this.prisma.transaction.count({
      where: {},
      orderBy: { createdAt: 'desc' },
    });

    return { transactions: transactions, transactionCount };
  }

  async create(payload: TransactionCreateDto): Promise<any> {
    const data = { ...payload };
    let transaction: any = await this.prisma.transaction.create({ data });

    return { transaction };
  }
}

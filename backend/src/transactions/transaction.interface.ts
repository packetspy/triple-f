import { Transaction } from '@prisma/client/';

export interface TransactionRO {
  transaction: Transaction;
}

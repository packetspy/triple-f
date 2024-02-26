import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TransactionsController } from './transactions/transaction.controller';
import { TransactionsService } from './transactions/transaction.service';
import { TransactionModule } from './transactions/transaction.module';

@Module({
  imports: [TransactionModule],
  controllers: [TransactionsController],
  providers: [AppService, TransactionsService],
})
export class AppModule {}

import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TransactionsService } from './transaction.service';
import { TransactionsController } from './transaction.controller';

@Module({
  imports: [],
  providers: [TransactionsService],
  controllers: [TransactionsController],
})
export class TransactionModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      //.apply(AuthMiddleware)
      .forRoutes(
        { path: 'transactions', method: RequestMethod.GET },
        { path: 'transactions', method: RequestMethod.POST },
        { path: 'transactions/:id', method: RequestMethod.DELETE },
        { path: 'transactions/:id', method: RequestMethod.PUT },
      );
  }
}

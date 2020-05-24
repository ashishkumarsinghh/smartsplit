import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionModule } from './transaction/transaction.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionSchema } from './transaction/transaction.schema';
import { TransactionController } from './transaction/transaction.controller';
import { TransactionService } from './transaction/transaction.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        TransactionModule,
        MongooseModule.forRoot('mongodb://localhost/splitwise'),
        MongooseModule.forFeature([
          { name: 'Transaction', schema: TransactionSchema },
        ]),
      ],
      controllers: [AppController, TransactionController],
      providers: [AppService, TransactionService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

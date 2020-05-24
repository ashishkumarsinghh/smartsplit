import { Test, TestingModule } from '@nestjs/testing';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionSchema } from './transaction.schema';

describe('Transaction Controller', () => {
  let controller: TransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forFeature([
          { name: 'Transaction', schema: TransactionSchema },
        ]),
      ],
      providers: [TransactionService],
      controllers: [TransactionController],
    }).compile();

    controller = module.get<TransactionController>(TransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('delete by id', () => {
    expect(
      controller.deleteTransaction('id').then(value => {
        console.log(value);
      }),
    ).toBe(Promise);
  });
});

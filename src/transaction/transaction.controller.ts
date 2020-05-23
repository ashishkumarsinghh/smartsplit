import { Controller, Get, Post, Body } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import TransactionDto from './transaction.dto';
@Controller('transaction')
export class TransactionController {
  constructor(private readonly transService: TransactionService) {}
  @Get()
  getTransactions(): string {
    return 'All transactions';
  }
  @Post()
  createTransaction(@Body() t: TransactionDto): Promise<any> {
    return this.transService.createTransaction(t);
  }
}

import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import TransactionDto from './transaction.dto';
@Controller('transaction')
export class TransactionController {
  constructor(private readonly transService: TransactionService) {}
  @Get()
  getTransactions(): Promise<any> {
    return this.transService.getAllTransactions();
  }
  @Post()
  createTransaction(@Body() t: TransactionDto): Promise<any> {
    return this.transService.createTransaction(t);
  }
  @Delete(':id')
  deleteTransaction(@Param('id') id: string): Promise<any> {
    console.log(id);
    return this.transService.deleteTransaction(id);
  }
  @Delete()
  deleteAllTransactions(@Body('ids') ids: Array<any>): Promise<any> {
    console.log(ids);
    return this.transService.deleteAllTransactions(ids);
  }
}

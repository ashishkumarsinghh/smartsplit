import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import TransactionDto from './transaction.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction } from './transaction.schema';
@Injectable()
export class TransactionService {
  constructor(
    @InjectModel('Transaction')
    private readonly transactionModel: Model<Transaction>,
  ) {}
  async getAllTransactions(): Promise<any[]> {
    return this.transactionModel.find().exec();
  }

  async createTransaction(t: TransactionDto): Promise<any> {
    const newTransaction = new this.transactionModel(t);
    return newTransaction.save();
  }
}

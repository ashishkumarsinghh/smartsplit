import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
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
  async deleteTransaction(id: string): Promise<any> {
    console.log(id);
    this.transactionModel.deleteOne({ _id: id });
  }
  async deleteAllTransactions(ids: Array<string>): Promise<any> {
    console.log(ids);
    for (const id of ids) {
      const deleted = await this.transactionModel.deleteOne({
        _id: Types.ObjectId(id),
      });
      console.log(deleted);
    }
    return 'All deleted.';
  }
  async createTransaction(t: TransactionDto): Promise<any> {
    const newTransaction = new this.transactionModel(t);
    return newTransaction.save();
  }
}

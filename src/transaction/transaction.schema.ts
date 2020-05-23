import * as mongoose from 'mongoose';

export const TransactionSchema = new mongoose.Schema({
  paidBy: String,
  amount: Number,
  paidFor: Array,
});

export interface Transaction extends mongoose.Document {
  id: string;
  paidBy: string;
  amount: number;
  paidFor: Array<any>;
}

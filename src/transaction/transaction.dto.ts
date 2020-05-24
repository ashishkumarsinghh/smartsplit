import { ApiProperty } from '@nestjs/swagger';
export default class TransactionDto {
  @ApiProperty() private paidBy: string;
  @ApiProperty() private amount: number;
  @ApiProperty() private paidFor: Array<any>;
}

import { IsNumber, IsString } from 'class-validator';

export class ReviewInput {

    @IsString()
    public review: string;

    @IsNumber()
    public rating: number;

    @IsNumber()
    public productId: number;

    @IsNumber()
    public customerId: number;
}

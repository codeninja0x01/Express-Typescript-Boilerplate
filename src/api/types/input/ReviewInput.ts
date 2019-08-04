import { IsNumber, IsString } from 'class-validator';
import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class ReviewInput {

    @IsString()
    @Field()
    public review: string;

    @IsNumber()
    @Field(() => Int)
    public rating: number;

    @IsNumber()
    @Field(() => Int)
    public productId: number;

    @IsNumber()
    @Field(() => Int)
    public customerId: number;
}

import { Field, ID, Int, ObjectType } from 'type-graphql';

import { Customer } from './Customer';
import { Product } from './Product';

@ObjectType()
export class Review {
    @Field(() => ID)
    public id: number;

    @Field()
    public review: string;

    @Field(() => Int)
    public rating: number;

    @Field()
    public createdAt: Date;

    @Field(() => Product)
    public product: Product;

    @Field(() => Customer)
    public customer: Customer;

}

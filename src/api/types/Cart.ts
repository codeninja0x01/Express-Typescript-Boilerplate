import { Field, ID, Int, ObjectType } from 'type-graphql';

import { Product } from './Product';

@ObjectType()
export class Cart {
    @Field(() => ID)
    public id: number;

    @Field()
    public cartKey: string;

    @Field()
    public attribute: string;

    @Field(() => Int)
    public quantity: number;

    @Field()
    public buyNow: boolean;

    @Field()
    public createdAt: Date;

    @Field(() => Product)
    public product: Product;
}

import { Field, InputType, Int } from 'type-graphql';

import { Cart } from '../Cart';

@InputType()
export class CartInput implements Partial<Cart> {

    @Field()
    public attribute: string;

    @Field()
    public cartKey: string;

    @Field(() => Int)
    public productId: number;

    @Field(() => Int)
    public quantity: number;
}

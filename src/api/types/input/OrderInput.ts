import { Field, InputType, Int } from 'type-graphql';

import { Cart } from '../Cart';

@InputType()
export class OrderInput implements Partial<Cart> {

    @Field()
    public cartKey: string;

    @Field(() => Int)
    public taxId: number;

    @Field(() => Int)
    public shippingId: number;
}

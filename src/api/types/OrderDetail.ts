import { Field, ID, Int, ObjectType } from 'type-graphql';

import { Order } from './Order';
import { Product } from './Product';

@ObjectType()
export class OrderDetail {
    @Field(() => ID)
    public id: number;

    @Field()
    public attribute: string;

    @Field()
    public productName: string;

    @Field(() => Int)
    public quantity: number;

    @Field()
    public unitCost: number;

    @Field()
    public currency: string;

    @Field(() => Product)
    public product: Product;

    @Field(() => Order)
    public order: Order;

}

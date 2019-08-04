import { Field, ID, ObjectType } from 'type-graphql';

import { Customer } from './Customer';
import { OrderDetail } from './OrderDetail';
import { Shipping } from './Shipping';
import { Tax } from './Tax';

@ObjectType()
export class Order {
    @Field(() => ID)
    public id: number;

    @Field()
    public totalAmount: number;

    @Field()
    public shippedOn: Date;

    @Field()
    public status: number;

    @Field()
    public comments: string;

    @Field()
    public authCode: string;

    @Field()
    public reference: string;

    @Field()
    public createdAt: Date;

    @Field(() => Customer)
    public customer: Customer;

    @Field(() => Tax)
    public tax: Tax;

    @Field(() => Shipping)
    public shipping: Shipping;

    @Field(() => [OrderDetail], { nullable: true })
    public details: OrderDetail[];
}

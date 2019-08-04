import { Field, ID, ObjectType } from 'type-graphql';

import { Order } from './Order';

@ObjectType()
export class Audit {
    @Field(() => ID)
    public id: number;

    @Field()
    public message: string;

    @Field()
    public code: string;

    @Field(() => Order)
    public order: Order;

}

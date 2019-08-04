import { Field, ID, ObjectType } from 'type-graphql';

import { Shipping } from './Shipping';

@ObjectType()
export class ShippingRegion {
    @Field(() => ID)
    public id: number;

    @Field()
    public name: string;

    @Field(() => [Shipping], { nullable: true })
    public shippings: Shipping[];

}

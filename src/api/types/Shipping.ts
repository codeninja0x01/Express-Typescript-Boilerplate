import { Field, ID, ObjectType } from 'type-graphql';

import { ShippingRegion } from './ShippingRegion';

@ObjectType()
export class Shipping {
    @Field(() => ID)
    public id: number;

    @Field()
    public type: string;

    @Field()
    public cost: number;

    @Field(() => ShippingRegion)
    public shippingRegion: ShippingRegion;

}

import { Field, ID, ObjectType } from 'type-graphql';

import { Order } from './Order';
import { Review } from './Review';
import { ShippingRegion } from './ShippingRegion';

@ObjectType()
export class Customer {

    @Field(() => ID)
    public id: number;

    @Field()
    public name: string;

    @Field()
    public email: string;

    @Field()
    public password: string;

    @Field()
    public address1: string;

    @Field()
    public address2: string;

    @Field()
    public city: string;

    @Field()
    public region: string;

    @Field()
    public postalCode: string;

    @Field()
    public country: string;

    @Field()
    public dayPhone: string;

    @Field()
    public evePhone: string;

    @Field()
    public mobPhone: string;

    @Field()
    public creditCard: string;

    @Field(() => ShippingRegion)
    public shippingRegion: ShippingRegion;

    @Field(() => [Order], { nullable: true })
    public orders: Order[];

    @Field(() => [Review], { nullable: true })
    public reviews: Review[];
}

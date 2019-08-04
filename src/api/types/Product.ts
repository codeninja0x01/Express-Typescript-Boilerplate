import { Field, ID, ObjectType } from 'type-graphql';

import { AttributeValue } from './AttributeValue';
import { Cart } from './Cart';
import { Category } from './Category';
import { OrderDetail } from './OrderDetail';
import { Review } from './Review';

@ObjectType()
export class Product {
    @Field(() => ID)
    public id: number;

    @Field()
    public name: string;

    @Field()
    public description: string;

    @Field()
    public price: number;

    @Field()
    public discountedPrice: number;

    @Field()
    public image1: string;

    @Field()
    public image2: string;

    @Field()
    public thumbnail: string;

    @Field()
    public display: boolean;

    @Field(() => [Review], { nullable: true })
    public reviews: Review[];

    @Field(() => [OrderDetail], { nullable: true })
    public orders: OrderDetail[];

    @Field(() => [Cart], { nullable: true })
    public carts: Cart[];

    @Field(() => [Category], { nullable: true })
    public categories: Category[];

    @Field(() => [AttributeValue], { nullable: true })
    public attributes: AttributeValue[];

}

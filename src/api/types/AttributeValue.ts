import { Field, ID, ObjectType } from 'type-graphql';

import { Attribute } from './Attribute';
import { Product } from './Product';

@ObjectType()
export class AttributeValue {
    @Field(() => ID)
    public id: number;

    @Field()
    public name: string;

    @Field(() => Attribute)
    public attribute: Attribute;

    @Field(() => [Product], { nullable: true })
    public products: Product[];

}

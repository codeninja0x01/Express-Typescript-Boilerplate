import { Field, ID, ObjectType } from 'type-graphql';

import { Category } from './Category';
import { Product } from './Product';

@ObjectType()
export class Department {
    @Field(() => ID)
    public id: number;

    @Field()
    public name: string;

    @Field()
    public description: string;

    @Field(() => [Category], { nullable: true })
    public categories: Category[];

    @Field(() => [Product], { nullable: true })
    public products: Product[];

}

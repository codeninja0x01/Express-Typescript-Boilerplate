import { Field, ID, ObjectType } from 'type-graphql';

import { Department } from './Department';
import { Product } from './Product';

@ObjectType()
export class Category {
    @Field(() => ID)
    public id: number;

    @Field()
    public name: string;

    @Field()
    public description: string;

    @Field(() => [Product], { nullable: true })
    public products: Product[];

    @Field(() => Department)
    public department: Department;
}

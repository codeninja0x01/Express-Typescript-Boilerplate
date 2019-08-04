import { Field, ID, ObjectType } from 'type-graphql';

import { AttributeValue } from './AttributeValue';

@ObjectType()
export class Attribute {
    @Field(() => ID)
    public id: number;

    @Field()
    public name: string;

    @Field(() => [AttributeValue], { nullable: true })
    public values?: AttributeValue[];

}

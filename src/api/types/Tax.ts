import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Tax {
    @Field(() => ID)
    public id: number;

    @Field()
    public type: string;

    @Field()
    public percentage: number;

}

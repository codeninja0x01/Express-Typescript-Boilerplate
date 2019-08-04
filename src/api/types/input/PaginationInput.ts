import { IsEnum, IsNumberString, IsOptional } from 'class-validator';
import { ArgsType, Field, Int, registerEnumType } from 'type-graphql';

enum ORDER_BY {
    asc = 'ASC',
    desc = 'DESC',
}

enum ORDER {
    id = 'id',
    name = 'name',
}

registerEnumType(ORDER, {name: 'ORDER'});
registerEnumType(ORDER_BY, {name: 'ORDERBY'});

@ArgsType()
export class PaginationInput {
    @IsOptional()
    @IsNumberString()
    @Field(() => Int)
    public offset?: number;

    @IsOptional()
    @IsNumberString()
    @Field(() => Int)
    public limit?: number;

    @IsOptional()
    @IsEnum(ORDER_BY)
    @Field(() => ORDER_BY)
    public orderBy?: ORDER_BY;

    @IsOptional()
    @IsEnum(ORDER)
    @Field(() => ORDER)
    public order?: ORDER;

}

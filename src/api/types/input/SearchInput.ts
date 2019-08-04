import { IsOptional } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

import { PaginationInput } from './PaginationInput';

@ArgsType()
export class SearchInput extends PaginationInput {
    @IsOptional()
    @Field()
    public search?: string;

    @IsOptional()
    @Field(() => Int)
    public descLength?: number;
}

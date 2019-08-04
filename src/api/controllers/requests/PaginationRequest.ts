import { IsEnum, IsNumberString, IsOptional } from 'class-validator';

enum ORDER_BY {
    asc = 'ASC',
    desc = 'DESC',
}

enum ORDER {
    id = 'id',
    name = 'name',
}

export class PaginationRequest {
    @IsOptional()
    @IsNumberString()
    public offset?: number;

    @IsOptional()
    @IsNumberString()
    public limit?: number;

    @IsOptional()
    @IsEnum(ORDER_BY)
    public orderBy?: ORDER_BY;

    @IsOptional()
    @IsEnum(ORDER)
    public order?: ORDER;

}

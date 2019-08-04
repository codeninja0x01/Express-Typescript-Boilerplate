import { IsOptional } from 'class-validator';

import { PaginationRequest } from './PaginationRequest';

export class SearchRequest extends PaginationRequest {
    @IsOptional()
    public search?: string;

    @IsOptional()
    public descLength?: number;
}

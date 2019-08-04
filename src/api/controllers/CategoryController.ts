import { Get, JsonController, OnUndefined, Params, QueryParams } from 'routing-controllers';

import { NotFoundError } from '../errors/NotFoundError';
import { Category } from '../models/Category';
import { CategoryService } from '../services/CategoryService';
import { IdRequest } from './requests/IdRequest';
import { PaginationRequest } from './requests/PaginationRequest';

@JsonController('/categories')
export class CategoryController {

    constructor(
        private categoryService: CategoryService
    ) { }

    @Get()
    public find(@QueryParams() query: PaginationRequest): Promise<Category[]> {
        return this.categoryService.find(query);
    }

    @Get('/:id')
    @OnUndefined(NotFoundError)
    public one(@Params() idRequest: IdRequest): Promise<Category | undefined> {
        return this.categoryService.findOne(idRequest.id);
    }

    @Get('/product/:id')
    @OnUndefined(NotFoundError)
    public product(@Params() idRequest: IdRequest): Promise<Category[] | undefined> {
        return this.categoryService.findProduct(idRequest.id);
    }

    @Get('/department/:id')
    @OnUndefined(NotFoundError)
    public department(@Params() idRequest: IdRequest): Promise<Category[] | undefined> {
        return this.categoryService.findDepartment(idRequest.id);
    }
}

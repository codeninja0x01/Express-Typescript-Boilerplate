import {
    Authorized, Body, CurrentUser, Get, JsonController, OnUndefined, Params, Post, QueryParams
} from 'routing-controllers';

import { NotFoundError } from '../errors/NotFoundError';
import { Customer } from '../models/Customer';
import { Product } from '../models/Product';
import { Review } from '../models/Review';
import { ProductService } from '../services/ProductService';
import { IdRequest } from './requests/IdRequest';
import { PaginationRequest } from './requests/PaginationRequest';
import { SearchRequest } from './requests/SearchRequest';

@JsonController('/products')
export class ProductController {

    constructor(
        private productService: ProductService
    ) { }

    @Get()
    public find(@QueryParams() query: PaginationRequest): Promise<Product[]> {
        return this.productService.find(query);
    }

    @Get('/search')
    public search(@QueryParams() query: SearchRequest): Promise<Product[] | undefined> {
        return this.productService.search(query);
    }

    @Get('/:id/detail')
    @OnUndefined(NotFoundError)
    public one(@Params() idRequest: IdRequest): Promise<Product | undefined> {
        return this.productService.findOne(idRequest.id);
    }

    @Get('/category/:id')
    @OnUndefined(NotFoundError)
    public category(@Params() idRequest: IdRequest, @QueryParams() query: PaginationRequest): Promise<Product[] | undefined> {
        return this.productService.findCategory(idRequest.id, query);
    }

    @Get('/department/:id')
    @OnUndefined(NotFoundError)
    public department(@Params() idRequest: IdRequest,  @QueryParams() query: PaginationRequest): Promise<Product[] | undefined> {
        return this.productService.findDepartment(idRequest.id, query);
    }

    @Get('/:id/locations')
    @OnUndefined(NotFoundError)
    public location(@Params() idRequest: IdRequest): Promise<any[] | undefined> {
        return this.productService.findLocation(idRequest.id);
    }

    @Get('/:id/reviews')
    @OnUndefined(NotFoundError)
    public review(@Params() idRequest: IdRequest): Promise<any[] | undefined> {
        return this.productService.findReview(idRequest.id);
    }

    @Authorized()
    @Post('/reviews')
    public createReview(@Body() review: Review, @CurrentUser({required: true}) customer: Customer): Promise<any[]> {
        return this.productService.createReview(review, customer);
    }
}

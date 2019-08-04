import {
    Body, Delete, Get, JsonController, OnUndefined, Param, Params, Post
} from 'routing-controllers';

import { NotFoundError } from '../errors/NotFoundError';
import { CartService } from '../services/CartService';
import { CartRequest } from './requests/CartRequest';
import { IdRequest } from './requests/IdRequest';

@JsonController('/carts')
export class CartController {

    constructor(
        private cartService: CartService
    ) { }

    @Post()
    public async create(@Body({ validate: { groups: ['create'] } }) cart: CartRequest): Promise<any[]> {
        return await this.cartService.create(cart);
    }

    @Post('/:id/update')
    @OnUndefined(NotFoundError)
    public async update(
        @Params() idRequest: IdRequest,
        @Body({ validate: { groups: ['update'] } }) cart: CartRequest): Promise<any[]> {
        return await this.cartService.update(idRequest.id, cart);
    }

    @Get('/:cartKey')
    @OnUndefined(NotFoundError)
    public async products(@Param('cartKey') cartKey: string): Promise<any[]> {
        return await this.cartService.products(cartKey);
    }

    @Post('/generate')
    public generate(): { cartKey } {
        return { cartKey: this.cartService.generate() };
    }

    @Get('/:id/save')
    @OnUndefined(200)
    public save(@Params() idRequest: IdRequest): Promise<void> {
        return this.cartService.save(idRequest.id);
    }

    @Get('/:cartKey/saved')
    @OnUndefined(NotFoundError)
    public async saved(@Param('cartKey') cartKey: string): Promise<any[]> {
        return await this.cartService.products(cartKey, false);
    }

    @Get('/:id/total')
    public total(@Params() idRequest: IdRequest): Promise<number | void> {
        return this.cartService.total(idRequest.id);
    }

    @Get('/:id/move')
    @OnUndefined(200)
    public move(@Params() idRequest: IdRequest): Promise<void> {
        return this.cartService.move(idRequest.id);
    }

    @Delete('/empty/:cartKey')
    @OnUndefined(200)
    public delete(@Param('cartKey') cartKey: string): Promise<void> {
        return this.cartService.delete(cartKey);
    }

    @Delete('/:id/product')
    @OnUndefined(200)
    public removeProduct(@Param('id') id: number): Promise<void> {
        return this.cartService.removeProduct(id);
    }
}

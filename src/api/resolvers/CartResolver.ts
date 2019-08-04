import { Arg, ID, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import { Cart as CartModel } from '../models/Cart';
import { CartService } from '../services/CartService';
import { Cart } from '../types/Cart';
import { CartInput } from '../types/input/CartInput';

@Service()
@Resolver(of => Cart)
export class CartResolver {

    constructor(
        private cartService: CartService
    ) { }

    @Mutation(() => [Cart])
    public async addCart(@Arg('order') input: CartInput): Promise<any[]> {
        return this.cartService.create(input);
    }

    @Mutation(() => [Cart])
    public updateCart(@Arg('cartKey') cartKey: number, @Arg('order') input: CartInput):
    Promise<any[]> {
        return this.cartService.update(cartKey, input);
    }

    @Mutation(() => ID)
    public removeCart(@Arg('cartKey') cartKey: string): Promise<void> {
        return this.cartService.delete(cartKey);
    }

    @Mutation(() => ID)
    public removeProductCart(@Arg('productId') productId: number): Promise<void> {
        return this.cartService.removeProduct(productId);
    }

    @Query(() => String)
    public generateCartKey(): string {
        return this.cartService.generate();
    }

    @Query(() => [Cart])
    public async getCartProduct(@Arg('cartKey') cartKey: string): Promise<CartModel[]> {
        const carts = await this.cartService.products(cartKey);
        return carts;
    }

}

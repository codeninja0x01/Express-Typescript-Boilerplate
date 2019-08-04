import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { CartRequest } from '../controllers/requests/CartRequest';
import { Cart } from '../models/Cart';
import { CartRepository } from '../repositories/CartRepository';
import { CartInput } from '../types/input/CartInput';

@Service()
export class CartService {
    constructor(
        @OrmRepository() private cartRepository: CartRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public async create(cart: CartRequest | CartInput): Promise<any[]> {
        const cartResult = await this.cartRepository
            .createQueryBuilder()
            .where('attribute = :attribute', { attribute: cart.attribute })
            .andWhere('cart_key = :cartKey', { cartKey: cart.cartKey })
            .andWhere('product_id = :productId', { productId: cart.productId })
            .getOne();

        if (cartResult === undefined) {
            this.log.info('Add product to cart');
            await this.cartRepository
                .createQueryBuilder()
                .insert()
                .into(Cart)
                .values({ attribute: cart.attribute, cartKey: cart.cartKey, productId: cart.productId, quantity: 1, createdAt: new Date() })
                .execute();

        } else {
            this.log.info('Update product quantity');
            await this.cartRepository
                .createQueryBuilder()
                .update(Cart, { buyNow: true, quantity: () => 'quantity + 1' })
                .where('attribute = :attribute', { attribute: cart.attribute })
                .andWhere('cart_key = :cartKey', { cartKey: cart.cartKey })
                .andWhere('product_id = :productId', { productId: cart.productId })
                .execute();
        }

        return await this.products(cart.cartKey);
    }

    public async update(id: number, cart: CartRequest | CartInput): Promise<any[]> {

        const checkCart = await this.cartRepository.findOne(id);

        if (checkCart === undefined) { return undefined; }

        if (cart.quantity <= 0) {
            this.log.info('Delete cart');
            await this.cartRepository.delete(id);
        } else {
            this.log.info('Update car quantity');
            await this.cartRepository.update({ id }, { quantity: cart.quantity });
        }

        return await this.products(checkCart.cartKey);
    }

    public generate(): string {
        this.log.info('Generate cartKey');
        return Math.random().toString().substring(3);
    }

    public async move(id: number): Promise<void> {
        this.log.info('Move cart to buy now');
        await this.cartRepository.update({ id }, { buyNow: true, createdAt: new Date() });
        return;
    }

    public async total(id: number): Promise<number | undefined> {
        this.log.info('Calculate total cart amount');
        return await this.cartRepository
            .createQueryBuilder('cart')
            .leftJoinAndSelect('cart.product', 'product')
            .select('ROUND(COALESCE(NULLIF(product.discounted_price, 0), product.price) * cart.quantity, 2)', 'total')
            .cache(true)
            .where('cart.id = :id', { id })
            .getRawOne();
    }

    public async save(id: number): Promise<void> {
        this.log.info('Save cart for later');
        await this.cartRepository.update({ id }, { buyNow: false, quantity: 1 });
        return;
    }

    public async products(cartKey: string, buyNow: boolean = true): Promise<any[]> {
        this.log.info('Find product in cart');
        return await this.cartRepository
            .createQueryBuilder('cart')
            .innerJoinAndSelect('cart.product', 'product')
            .select(['product.id', 'product.name', 'cart.id', 'cart.attribute', 'cart.quantity'])
            .addSelect('ROUND(COALESCE(NULLIF(product.discounted_price, 0), product.price) * cart.quantity, 2)', 'subtotal')
            .addSelect('ROUND(COALESCE(NULLIF(product.discounted_price, 0), product.price), 2)', 'price')
            .where('cart.cart_key = :cartKey', { cartKey })
            .andWhere('cart.buy_now = :buyNow', { buyNow })
            .getMany();
    }

    public async delete(cartKey: string): Promise<void> {
        this.log.info('Delete cart');
        await this.cartRepository.delete({ cartKey });
        return;
    }

    public async removeProduct(id: number): Promise<void> {
        this.log.info('Remove product');
        await this.cartRepository.delete(id);
        return;
    }
}

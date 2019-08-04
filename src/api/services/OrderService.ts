import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { OrderRequest } from '../controllers/requests/OrderRequest';
import { Customer } from '../models/Customer';
import { Order } from '../models/Order';
import { OrderDetail } from '../models/OrderDetail';
import { CartRepository } from '../repositories/CartRepository';
import { OrderDetailRepository } from '../repositories/OrderDetailRepository';
import { OrderRepository } from '../repositories/OrderRepository';
import { ShippingRepository } from '../repositories/ShippingRepository';
import { TaxRepository } from '../repositories/TaxRepository';

@Service()
export class OrderService {
    constructor(
        @OrmRepository() private orderRepository: OrderRepository,
        @OrmRepository() private orderDetailRepository: OrderDetailRepository,
        @OrmRepository() private taxRepository: TaxRepository,
        @OrmRepository() private shippingRepository: ShippingRepository,
        @OrmRepository() private cartRepository: CartRepository,
        @Logger(__filename) private log: LoggerInterface
    ) {}

    public async save(order: OrderRequest, customer: Customer): Promise<Order> {
        this.log.info('Create order');

        const newOrder = await this.orderRepository.save({
            customerId: customer.id,
            taxId: order.taxId,
            shippingId: order.shippingId,
        });

        const carts = await this.cartRepository
            .createQueryBuilder('cart')
            .select('cart.id')
            .addSelect('cart.attribute')
            .addSelect('cart.quantity')
            .addSelect('COALESCE(NULLIF(product.discounted_price, 0), product.price) * cart.quantity', 'subtotal')
            .addSelect('COALESCE(NULLIF(product.discounted_price, 0), product.price)', 'price')
            .leftJoinAndSelect('cart.product', 'product')
            .cache(true)
            .where('cart.cart_key = :id', {id: order.cartKey})
            .getRawMany();

        const preload = [];
        const orderId = [];
        let totalPrice = 0;

        await carts.forEach(async cart => {
            totalPrice += cart.subtotal;
            await orderId.push(cart.cart_id);
            const detail = new OrderDetail();
            detail.productId = cart.product_id;
            detail.productName = cart.product_name;
            detail.quantity = cart.cart_quantity;
            detail.attribute = cart.cart_attribute;
            detail.unitCost = cart.price;
            detail.orderId = newOrder.id;
            await preload.push(detail);
        });

        if (preload.length > 0) {
            const taxValue = await this.taxRepository.findOne(order.taxId, {select: ['percentage']});
            const shippingValue = await this.shippingRepository.findOne(order.shippingId, {select: ['cost']});
            const taxableValue = await (taxValue.percentage * totalPrice) / 100;

            newOrder.totalAmount = await Math.round((totalPrice + shippingValue.cost + taxableValue) * 100);
            await this.orderDetailRepository.insert(preload);
            await this.orderRepository.save(newOrder);
            await this.cartRepository.delete(orderId);
        }

        this.log.info('Create order', carts);
        return newOrder;
    }

    public findOne(id: number): Promise<OrderDetail> {
        return this.orderDetailRepository
            .createQueryBuilder()
            .select('ANY_VALUE(order_id)', 'order_id')
            .addSelect('ANY_VALUE(product_id)', 'product_id')
            .addSelect('ANY_VALUE(attribute)', 'attribute')
            .addSelect('ANY_VALUE(product_name)', 'product_name')
            .addSelect('ANY_VALUE(quantity)', 'quantity')
            .addSelect('ANY_VALUE(unit_cost)', 'unit_cost')
            .addSelect('SUM(quantity * unit_cost)', 'subtotal')
            .where('order_id = :id', { id })
            .getRawOne();
    }

    public async customer(customer: Customer): Promise<Order[] | undefined> {
        this.log.info('Find order by customer');
        const orders = await this.orderRepository
            .createQueryBuilder('o')
            .select(['o.id', 'o.total_amount', 'o.created_on', 'o.shipped_on', 'o.status'])
            .leftJoinAndSelect('order.customer', 'customer')
            .where('o.customer_id = :id', { id: customer.id })
            .cache(true)
            .getMany();
        return orders;
    }

    public detail(id: number): Promise<Order | undefined> {
        this.log.info('Order Details');
        return this.orderRepository.findOne(
            { id },
            { select: ['id', 'shippedOn', 'status', 'totalAmount', 'createdAt'] }
        );
    }
}

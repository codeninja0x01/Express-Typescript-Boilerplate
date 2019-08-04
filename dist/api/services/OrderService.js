"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const Logger_1 = require("../../decorators/Logger");
const OrderDetail_1 = require("../models/OrderDetail");
const CartRepository_1 = require("../repositories/CartRepository");
const OrderDetailRepository_1 = require("../repositories/OrderDetailRepository");
const OrderRepository_1 = require("../repositories/OrderRepository");
const ShippingRepository_1 = require("../repositories/ShippingRepository");
const TaxRepository_1 = require("../repositories/TaxRepository");
let OrderService = class OrderService {
    constructor(orderRepository, orderDetailRepository, taxRepository, shippingRepository, cartRepository, log) {
        this.orderRepository = orderRepository;
        this.orderDetailRepository = orderDetailRepository;
        this.taxRepository = taxRepository;
        this.shippingRepository = shippingRepository;
        this.cartRepository = cartRepository;
        this.log = log;
    }
    save(order, customer) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Create order');
            const newOrder = yield this.orderRepository.save({
                customerId: customer.id,
                taxId: order.taxId,
                shippingId: order.shippingId,
            });
            const carts = yield this.cartRepository
                .createQueryBuilder('cart')
                .select('cart.id')
                .addSelect('cart.attribute')
                .addSelect('cart.quantity')
                .addSelect('COALESCE(NULLIF(product.discounted_price, 0), product.price) * cart.quantity', 'subtotal')
                .addSelect('COALESCE(NULLIF(product.discounted_price, 0), product.price)', 'price')
                .leftJoinAndSelect('cart.product', 'product')
                .where('cart.cart_key = :id', { id: order.cartKey })
                .getRawMany();
            const preload = [];
            const orderId = [];
            let totalPrice = 0;
            yield carts.forEach((cart) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                totalPrice += cart.subtotal;
                yield orderId.push(cart.cart_id);
                const detail = new OrderDetail_1.OrderDetail();
                detail.productId = cart.product_id;
                detail.productName = cart.product_name;
                detail.quantity = cart.cart_quantity;
                detail.attribute = cart.cart_attribute;
                detail.unitCost = cart.price;
                detail.orderId = newOrder.id;
                yield preload.push(detail);
            }));
            if (preload.length > 0) {
                const taxValue = yield this.taxRepository.findOne(order.taxId, { select: ['percentage'] });
                const shippingValue = yield this.shippingRepository.findOne(order.shippingId, { select: ['cost'] });
                const taxableValue = (yield (taxValue.percentage * totalPrice)) / 100;
                newOrder.totalAmount = yield Math.round((totalPrice + shippingValue.cost + taxableValue) * 100);
                yield this.orderDetailRepository.insert(preload);
                yield this.orderRepository.save(newOrder);
                yield this.cartRepository.delete(orderId);
            }
            this.log.info('Create order', carts);
            return newOrder;
        });
    }
    findOne(id) {
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
    customer(customer) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Find order by customer');
            const orders = yield this.orderRepository
                .createQueryBuilder('o')
                .select(['o.id', 'o.total_amount', 'o.created_on', 'o.shipped_on', 'o.status'])
                .leftJoinAndSelect('order.customer', 'customer')
                .where('o.customer_id = :id', { id: customer.id })
                .getMany();
            return orders;
        });
    }
    detail(id) {
        this.log.info('Order Details');
        return this.orderRepository.findOne({ id }, { select: ['id', 'shippedOn', 'status', 'totalAmount', 'createdAt'] });
    }
};
OrderService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(2, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(3, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(4, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(5, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [OrderRepository_1.OrderRepository,
        OrderDetailRepository_1.OrderDetailRepository,
        TaxRepository_1.TaxRepository,
        ShippingRepository_1.ShippingRepository,
        CartRepository_1.CartRepository, Object])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=OrderService.js.map
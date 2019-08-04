"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const Logger_1 = require("../../decorators/Logger");
const CartRepository_1 = require("../repositories/CartRepository");
const ProductRepository_1 = require("../repositories/ProductRepository");
let CartService = class CartService {
    constructor(cartRepository, productRepository, log) {
        this.cartRepository = cartRepository;
        this.productRepository = productRepository;
        this.log = log;
    }
    create(cart) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Create shopping cart');
            const checkCart = yield this.cartRepository
                .findOne({ where: { attribute: cart.attribute, cartKey: cart.cartKey, productId: cart.productId } });
            if (checkCart === undefined) {
                if ((yield this.productRepository.count({ where: { id: cart.productId } })) > 0) {
                    yield this.cartRepository.insert({
                        attribute: cart.attribute,
                        cartKey: cart.cartKey,
                        productId: cart.productId,
                        quantity: 1,
                    });
                }
            }
            else {
                yield this.cartRepository
                    .update({ attribute: cart.attribute, cartKey: cart.cartKey, productId: cart.productId }, { buyNow: true, quantity: checkCart.quantity + 1 });
            }
            return yield this.products(cart.cartKey);
        });
    }
    update(id, cart) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Update shopping car quantity');
            const checkCart = yield this.cartRepository.findOne(id);
            if (checkCart === undefined) {
                return undefined;
            }
            if (cart.quantity <= 0) {
                yield this.cartRepository.delete(id);
            }
            else {
                yield this.cartRepository.update({ id }, { quantity: cart.quantity });
            }
            return yield this.products(checkCart.cartKey);
        });
    }
    generate() {
        this.log.info('Generate cartKey');
        return Math.random().toString().substring(3);
    }
    move(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Move cart to buy now');
            yield this.cartRepository.update({ id }, { buyNow: true, createdAt: new Date() });
            return;
        });
    }
    total(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Calculate total cart amount');
            const cart = yield this.cartRepository
                .createQueryBuilder('cart')
                .leftJoinAndSelect('cart.product', 'product')
                .select('ROUND(COALESCE(NULLIF(product.discounted_price, 0), product.price) * cart.quantity, 2)', 'total')
                .where('cart.id = :id', { id })
                .getRawOne();
            return cart;
        });
    }
    save(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Save cart for later');
            yield this.cartRepository.update({ id }, { buyNow: false, quantity: 1 });
            return;
        });
    }
    products(cartKey, buyNow = true) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Find product in cart');
            const carts = yield this.cartRepository
                .createQueryBuilder('cart')
                .innerJoinAndSelect('cart.product', 'product')
                .select(['product.id', 'product.name', 'cart.id', 'cart.attribute', 'cart.quantity'])
                .addSelect('ROUND(COALESCE(NULLIF(product.discounted_price, 0), product.price) * cart.quantity, 2)', 'subtotal')
                .addSelect('ROUND(COALESCE(NULLIF(product.discounted_price, 0), product.price), 2)', 'price')
                .where('cart.cart_key = :cartKey', { cartKey })
                .andWhere('cart.buy_now = :buyNow', { buyNow })
                .getRawAndEntities();
            return carts.raw;
        });
    }
    delete(cartKey) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Delete cart');
            yield this.cartRepository.delete({ cartKey });
            return;
        });
    }
    removeProduct(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Remove product');
            yield this.cartRepository.delete(id);
            return;
        });
    }
};
CartService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(2, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [CartRepository_1.CartRepository,
        ProductRepository_1.ProductRepository, Object])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=CartService.js.map
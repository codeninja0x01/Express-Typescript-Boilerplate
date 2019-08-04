"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const typedi_1 = require("typedi");
const CartService_1 = require("../services/CartService");
const Cart_1 = require("../types/Cart");
const CartInput_1 = require("../types/input/CartInput");
let CartResolver = class CartResolver {
    constructor(cartService) {
        this.cartService = cartService;
    }
    addCart(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.cartService.create(input);
        });
    }
    updateCart(cartKey, input) {
        return this.cartService.update(cartKey, input);
    }
    removeCart(cartKey) {
        return this.cartService.delete(cartKey);
    }
    removeProductCart(productId) {
        return this.cartService.removeProduct(productId);
    }
    generateCartKey() {
        return this.cartService.generate();
    }
    getCartProduct(cartKey) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const carts = yield this.cartService.products(cartKey);
            return carts;
        });
    }
};
tslib_1.__decorate([
    type_graphql_1.Mutation(() => [Cart_1.Cart]),
    tslib_1.__param(0, type_graphql_1.Arg('order')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CartInput_1.CartInput]),
    tslib_1.__metadata("design:returntype", Promise)
], CartResolver.prototype, "addCart", null);
tslib_1.__decorate([
    type_graphql_1.Mutation(() => [Cart_1.Cart]),
    tslib_1.__param(0, type_graphql_1.Arg('cartKey')), tslib_1.__param(1, type_graphql_1.Arg('order')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, CartInput_1.CartInput]),
    tslib_1.__metadata("design:returntype", Promise)
], CartResolver.prototype, "updateCart", null);
tslib_1.__decorate([
    type_graphql_1.Mutation(() => type_graphql_1.ID),
    tslib_1.__param(0, type_graphql_1.Arg('cartKey')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CartResolver.prototype, "removeCart", null);
tslib_1.__decorate([
    type_graphql_1.Mutation(() => type_graphql_1.ID),
    tslib_1.__param(0, type_graphql_1.Arg('productId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CartResolver.prototype, "removeProductCart", null);
tslib_1.__decorate([
    type_graphql_1.Query(() => String),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", String)
], CartResolver.prototype, "generateCartKey", null);
tslib_1.__decorate([
    type_graphql_1.Query(() => [Cart_1.Cart]),
    tslib_1.__param(0, type_graphql_1.Arg('cartKey')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CartResolver.prototype, "getCartProduct", null);
CartResolver = tslib_1.__decorate([
    typedi_1.Service(),
    type_graphql_1.Resolver(of => Cart_1.Cart),
    tslib_1.__metadata("design:paramtypes", [CartService_1.CartService])
], CartResolver);
exports.CartResolver = CartResolver;
//# sourceMappingURL=CartResolver.js.map
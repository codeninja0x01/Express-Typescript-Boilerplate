"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const routing_controllers_1 = require("routing-controllers");
const NotFoundError_1 = require("../errors/NotFoundError");
const CartService_1 = require("../services/CartService");
const CartRequest_1 = require("./requests/CartRequest");
const IdRequest_1 = require("./requests/IdRequest");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    create(cart) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const errors = yield class_validator_1.validate(cart, { groups: ['create'] });
            console.log(errors);
            return yield this.cartService.create(cart);
        });
    }
    update(idRequest, cart) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.cartService.update(idRequest.id, cart);
        });
    }
    products(cartKey) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.cartService.products(cartKey);
        });
    }
    generate() {
        return { cartKey: this.cartService.generate() };
    }
    save(idRequest) {
        return this.cartService.save(idRequest.id);
    }
    saved(cartKey) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.cartService.products(cartKey, false);
        });
    }
    total(idRequest) {
        return this.cartService.total(idRequest.id);
    }
    move(idRequest) {
        return this.cartService.move(idRequest.id);
    }
    delete(cartKey) {
        return this.cartService.delete(cartKey);
    }
    removeProduct(id) {
        return this.cartService.removeProduct(id);
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CartRequest_1.CartRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], CartController.prototype, "create", null);
tslib_1.__decorate([
    routing_controllers_1.Post('/:id/update'),
    routing_controllers_1.OnUndefined(NotFoundError_1.NotFoundError),
    tslib_1.__param(0, routing_controllers_1.Params()),
    tslib_1.__param(1, routing_controllers_1.Body({ validate: { groups: ['update'] } })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IdRequest_1.IdRequest,
        CartRequest_1.CartRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], CartController.prototype, "update", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:cartKey'),
    routing_controllers_1.OnUndefined(NotFoundError_1.NotFoundError),
    tslib_1.__param(0, routing_controllers_1.Param('cartKey')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CartController.prototype, "products", null);
tslib_1.__decorate([
    routing_controllers_1.Post('/generate'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Object)
], CartController.prototype, "generate", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:id/save'),
    routing_controllers_1.OnUndefined(200),
    tslib_1.__param(0, routing_controllers_1.Params()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IdRequest_1.IdRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], CartController.prototype, "save", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:cartKey/saved'),
    routing_controllers_1.OnUndefined(NotFoundError_1.NotFoundError),
    tslib_1.__param(0, routing_controllers_1.Param('cartKey')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CartController.prototype, "saved", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:id/total'),
    tslib_1.__param(0, routing_controllers_1.Params()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IdRequest_1.IdRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], CartController.prototype, "total", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:id/move'),
    routing_controllers_1.OnUndefined(200),
    tslib_1.__param(0, routing_controllers_1.Params()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IdRequest_1.IdRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], CartController.prototype, "move", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/empty/:cartKey'),
    routing_controllers_1.OnUndefined(200),
    tslib_1.__param(0, routing_controllers_1.Param('cartKey')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CartController.prototype, "delete", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/:id/product'),
    routing_controllers_1.OnUndefined(200),
    tslib_1.__param(0, routing_controllers_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CartController.prototype, "removeProduct", null);
CartController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/carts'),
    tslib_1.__metadata("design:paramtypes", [CartService_1.CartService])
], CartController);
exports.CartController = CartController;
//# sourceMappingURL=CartController.js.map
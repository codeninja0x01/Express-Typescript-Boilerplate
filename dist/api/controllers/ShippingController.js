"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const NotFoundError_1 = require("../errors/NotFoundError");
const ShippingService_1 = require("../services/ShippingService");
const IdRequest_1 = require("./requests/IdRequest");
let ShippingController = class ShippingController {
    constructor(shippingService) {
        this.shippingService = shippingService;
    }
    find() {
        return this.shippingService.find();
    }
    one(idRequest) {
        return this.shippingService.region(idRequest.id);
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShippingController.prototype, "find", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/region/:id'),
    routing_controllers_1.OnUndefined(NotFoundError_1.NotFoundError),
    tslib_1.__param(0, routing_controllers_1.Params()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IdRequest_1.IdRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], ShippingController.prototype, "one", null);
ShippingController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/shipping'),
    tslib_1.__metadata("design:paramtypes", [ShippingService_1.ShippingService])
], ShippingController);
exports.ShippingController = ShippingController;
//# sourceMappingURL=ShippingController.js.map
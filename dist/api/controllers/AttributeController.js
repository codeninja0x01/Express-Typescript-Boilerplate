"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const NotFoundError_1 = require("../errors/NotFoundError");
const AttributeService_1 = require("../services/AttributeService");
const IdRequest_1 = require("./requests/IdRequest");
let AttributeController = class AttributeController {
    constructor(attributeService) {
        this.attributeService = attributeService;
    }
    find() {
        return this.attributeService.find();
    }
    one(idRequest) {
        return this.attributeService.findOne(idRequest.id);
    }
    value(idRequest) {
        return this.attributeService.findValue(idRequest.id);
    }
    product(idRequest) {
        return this.attributeService.findProduct(idRequest.id);
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AttributeController.prototype, "find", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:id'),
    routing_controllers_1.OnUndefined(NotFoundError_1.NotFoundError),
    tslib_1.__param(0, routing_controllers_1.Params()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IdRequest_1.IdRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], AttributeController.prototype, "one", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/value/:id'),
    routing_controllers_1.OnUndefined(NotFoundError_1.NotFoundError),
    tslib_1.__param(0, routing_controllers_1.Params()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IdRequest_1.IdRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], AttributeController.prototype, "value", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/product/:id'),
    routing_controllers_1.OnUndefined(NotFoundError_1.NotFoundError),
    tslib_1.__param(0, routing_controllers_1.Params()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IdRequest_1.IdRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], AttributeController.prototype, "product", null);
AttributeController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/attributes'),
    tslib_1.__metadata("design:paramtypes", [AttributeService_1.AttributeService])
], AttributeController);
exports.AttributeController = AttributeController;
//# sourceMappingURL=AttributeController.js.map
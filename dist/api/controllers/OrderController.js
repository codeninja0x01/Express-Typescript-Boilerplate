"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const NotFoundError_1 = require("../errors/NotFoundError");
const Customer_1 = require("../models/Customer");
const OrderService_1 = require("../services/OrderService");
const IdRequest_1 = require("./requests/IdRequest");
const OrderRequest_1 = require("./requests/OrderRequest");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    save(customer, order) {
        console.log(customer);
        return this.orderService.save(order, customer);
    }
    customer(customer) {
        return this.orderService.customer(customer);
    }
    one(idRequest) {
        return this.orderService.findOne(idRequest.id);
    }
    detail(idRequest) {
        return this.orderService.detail(idRequest.id);
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post(),
    tslib_1.__param(0, routing_controllers_1.CurrentUser({ required: true })),
    tslib_1.__param(1, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customer_1.Customer,
        OrderRequest_1.OrderRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderController.prototype, "save", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/customer'),
    routing_controllers_1.OnUndefined(NotFoundError_1.NotFoundError),
    tslib_1.__param(0, routing_controllers_1.CurrentUser({ required: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customer_1.Customer]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderController.prototype, "customer", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/detail/:id'),
    routing_controllers_1.OnUndefined(NotFoundError_1.NotFoundError),
    tslib_1.__param(0, routing_controllers_1.Params()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IdRequest_1.IdRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderController.prototype, "one", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:id'),
    routing_controllers_1.OnUndefined(NotFoundError_1.NotFoundError),
    tslib_1.__param(0, routing_controllers_1.Params()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IdRequest_1.IdRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderController.prototype, "detail", null);
OrderController = tslib_1.__decorate([
    routing_controllers_1.Authorized(),
    routing_controllers_1.JsonController('/orders'),
    tslib_1.__metadata("design:paramtypes", [OrderService_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=OrderController.js.map
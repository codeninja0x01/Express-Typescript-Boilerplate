"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const Customer_1 = require("../models/Customer");
const CustomerService_1 = require("../services/CustomerService");
let CustomerController = class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    register(formData) {
        return this.customerService.create(formData);
    }
    update(formData, customer) {
        return this.customerService.update(formData, customer.id);
    }
    address(formData, customer) {
        return this.customerService.address(formData, customer.id);
    }
    card(formData, customer) {
        return this.customerService.card(formData, customer.id);
    }
    login(customer) {
        return this.customerService.login(customer);
    }
    current(customer) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.customerService.find(customer.email);
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: { groups: ['create'] } })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customer_1.Customer]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "register", null);
tslib_1.__decorate([
    routing_controllers_1.Put(),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: { groups: ['update'] } })),
    tslib_1.__param(1, routing_controllers_1.CurrentUser({ required: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customer_1.Customer,
        Customer_1.Customer]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "update", null);
tslib_1.__decorate([
    routing_controllers_1.Post('/address'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ required: true, validate: { groups: ['address'] } })),
    tslib_1.__param(1, routing_controllers_1.CurrentUser({ required: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customer_1.Customer,
        Customer_1.Customer]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "address", null);
tslib_1.__decorate([
    routing_controllers_1.Post('/card'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ required: true, validate: { groups: ['card'] } })),
    tslib_1.__param(1, routing_controllers_1.CurrentUser({ required: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customer_1.Customer,
        Customer_1.Customer]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "card", null);
tslib_1.__decorate([
    routing_controllers_1.Post('/login'),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: { groups: ['login'] } })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customer_1.Customer]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "login", null);
tslib_1.__decorate([
    routing_controllers_1.Get(),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.CurrentUser({ required: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customer_1.Customer]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "current", null);
CustomerController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/customers'),
    tslib_1.__metadata("design:paramtypes", [CustomerService_1.CustomerService])
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=CustomerController.js.map
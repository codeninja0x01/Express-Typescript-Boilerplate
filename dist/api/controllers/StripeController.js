"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const StripeService_1 = require("../services/StripeService");
const StripeRequest_1 = require("./requests/StripeRequest");
let StripeController = class StripeController {
    constructor(stripeService) {
        this.stripeService = stripeService;
    }
    charge(stripe) {
        return this.stripeService.charge(stripe);
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post('/charge'),
    tslib_1.__param(0, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [StripeRequest_1.StripeRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], StripeController.prototype, "charge", null);
StripeController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/stripe'),
    tslib_1.__metadata("design:paramtypes", [StripeService_1.StripeService])
], StripeController);
exports.StripeController = StripeController;
//# sourceMappingURL=StripeController.js.map
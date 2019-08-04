"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const typedi_1 = require("typedi");
const Logger_1 = require("../../decorators/Logger");
const ShippingService_1 = require("../services/ShippingService");
const Shipping_1 = require("../types/Shipping");
let ShippingResolver = class ShippingResolver {
    constructor(shippingService, log) {
        this.shippingService = shippingService;
        this.log = log;
    }
    getShippings() {
        this.log.info(`Find all shipping`);
        return this.shippingService.find();
    }
    getRegion(id) {
        this.log.info(`Find one tax`);
        return this.shippingService.region(id);
    }
};
tslib_1.__decorate([
    type_graphql_1.Query(() => [Shipping_1.Shipping]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShippingResolver.prototype, "getShippings", null);
tslib_1.__decorate([
    type_graphql_1.Query(() => Shipping_1.Shipping),
    tslib_1.__param(0, type_graphql_1.Arg('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ShippingResolver.prototype, "getRegion", null);
ShippingResolver = tslib_1.__decorate([
    typedi_1.Service(),
    type_graphql_1.Resolver(() => Shipping_1.Shipping),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [ShippingService_1.ShippingService, Object])
], ShippingResolver);
exports.ShippingResolver = ShippingResolver;
//# sourceMappingURL=ShippingResolver.js.map
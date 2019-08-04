"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const ShippingRegion_1 = require("./ShippingRegion");
let Shipping = class Shipping {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", Number)
], Shipping.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Shipping.prototype, "type", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Number)
], Shipping.prototype, "cost", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => ShippingRegion_1.ShippingRegion),
    tslib_1.__metadata("design:type", ShippingRegion_1.ShippingRegion)
], Shipping.prototype, "shippingRegion", void 0);
Shipping = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], Shipping);
exports.Shipping = Shipping;
//# sourceMappingURL=Shipping.js.map
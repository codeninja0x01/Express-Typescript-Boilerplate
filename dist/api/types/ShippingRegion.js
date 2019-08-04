"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const Shipping_1 = require("./Shipping");
let ShippingRegion = class ShippingRegion {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", Number)
], ShippingRegion.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], ShippingRegion.prototype, "name", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [Shipping_1.Shipping], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], ShippingRegion.prototype, "shippings", void 0);
ShippingRegion = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], ShippingRegion);
exports.ShippingRegion = ShippingRegion;
//# sourceMappingURL=ShippingRegion.js.map
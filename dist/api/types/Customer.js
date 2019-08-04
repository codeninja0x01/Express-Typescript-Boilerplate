"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const Order_1 = require("./Order");
const Review_1 = require("./Review");
const ShippingRegion_1 = require("./ShippingRegion");
let Customer = class Customer {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", Number)
], Customer.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "name", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "email", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "password", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "address1", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "address2", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "city", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "region", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "postalCode", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "country", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "dayPhone", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "evePhone", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "mobPhone", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "creditCard", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => ShippingRegion_1.ShippingRegion),
    tslib_1.__metadata("design:type", ShippingRegion_1.ShippingRegion)
], Customer.prototype, "shippingRegion", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [Order_1.Order], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], Customer.prototype, "orders", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [Review_1.Review], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], Customer.prototype, "reviews", void 0);
Customer = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], Customer);
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const Customer_1 = require("./Customer");
const OrderDetail_1 = require("./OrderDetail");
const Shipping_1 = require("./Shipping");
const Tax_1 = require("./Tax");
let Order = class Order {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "totalAmount", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Date)
], Order.prototype, "shippedOn", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "status", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "comments", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "authCode", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "reference", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Date)
], Order.prototype, "createdAt", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => Customer_1.Customer),
    tslib_1.__metadata("design:type", Customer_1.Customer)
], Order.prototype, "customer", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => Tax_1.Tax),
    tslib_1.__metadata("design:type", Tax_1.Tax)
], Order.prototype, "tax", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => Shipping_1.Shipping),
    tslib_1.__metadata("design:type", Shipping_1.Shipping)
], Order.prototype, "shipping", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [OrderDetail_1.OrderDetail], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], Order.prototype, "details", void 0);
Order = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], Order);
exports.Order = Order;
//# sourceMappingURL=Order.js.map
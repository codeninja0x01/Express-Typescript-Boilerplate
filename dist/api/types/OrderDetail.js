"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const Order_1 = require("./Order");
const Product_1 = require("./Product");
let OrderDetail = class OrderDetail {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", Number)
], OrderDetail.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], OrderDetail.prototype, "attribute", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], OrderDetail.prototype, "productName", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], OrderDetail.prototype, "quantity", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Number)
], OrderDetail.prototype, "unitCost", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], OrderDetail.prototype, "currency", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => Product_1.Product),
    tslib_1.__metadata("design:type", Product_1.Product)
], OrderDetail.prototype, "product", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => Order_1.Order),
    tslib_1.__metadata("design:type", Order_1.Order)
], OrderDetail.prototype, "order", void 0);
OrderDetail = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], OrderDetail);
exports.OrderDetail = OrderDetail;
//# sourceMappingURL=OrderDetail.js.map
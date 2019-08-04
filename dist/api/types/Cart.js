"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const Product_1 = require("./Product");
let Cart = class Cart {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", Number)
], Cart.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Cart.prototype, "cartKey", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Cart.prototype, "attribute", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], Cart.prototype, "quantity", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Boolean)
], Cart.prototype, "buyNow", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Date)
], Cart.prototype, "createdAt", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => Product_1.Product),
    tslib_1.__metadata("design:type", Product_1.Product)
], Cart.prototype, "product", void 0);
Cart = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], Cart);
exports.Cart = Cart;
//# sourceMappingURL=Cart.js.map
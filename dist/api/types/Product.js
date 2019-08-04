"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const AttributeValue_1 = require("./AttributeValue");
const Cart_1 = require("./Cart");
const Category_1 = require("./Category");
const OrderDetail_1 = require("./OrderDetail");
const Review_1 = require("./Review");
let Product = class Product {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "name", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "description", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "price", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "discountedPrice", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "image1", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "image2", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Boolean)
], Product.prototype, "display", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [Review_1.Review], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "reviews", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [OrderDetail_1.OrderDetail], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "orders", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [Cart_1.Cart], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "carts", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [Category_1.Category], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "categories", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [AttributeValue_1.AttributeValue], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "attributes", void 0);
Product = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], Product);
exports.Product = Product;
//# sourceMappingURL=Product.js.map
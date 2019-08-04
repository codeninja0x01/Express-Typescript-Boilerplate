"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const Customer_1 = require("./Customer");
const Product_1 = require("./Product");
let Review = class Review {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", Number)
], Review.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Review.prototype, "review", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], Review.prototype, "rating", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Date)
], Review.prototype, "createdAt", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => Product_1.Product),
    tslib_1.__metadata("design:type", Product_1.Product)
], Review.prototype, "product", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => Customer_1.Customer),
    tslib_1.__metadata("design:type", Customer_1.Customer)
], Review.prototype, "customer", void 0);
Review = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], Review);
exports.Review = Review;
//# sourceMappingURL=Review.js.map
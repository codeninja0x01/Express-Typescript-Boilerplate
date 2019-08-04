"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const Department_1 = require("./Department");
const Product_1 = require("./Product");
let Category = class Category {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", Number)
], Category.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Category.prototype, "name", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Category.prototype, "description", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [Product_1.Product], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], Category.prototype, "products", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => Department_1.Department),
    tslib_1.__metadata("design:type", Department_1.Department)
], Category.prototype, "department", void 0);
Category = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], Category);
exports.Category = Category;
//# sourceMappingURL=Category.js.map
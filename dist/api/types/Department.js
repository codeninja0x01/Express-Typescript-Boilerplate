"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const Category_1 = require("./Category");
const Product_1 = require("./Product");
let Department = class Department {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", Number)
], Department.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Department.prototype, "name", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Department.prototype, "description", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [Category_1.Category], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], Department.prototype, "categories", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [Product_1.Product], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], Department.prototype, "products", void 0);
Department = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], Department);
exports.Department = Department;
//# sourceMappingURL=Department.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const Attribute_1 = require("./Attribute");
const Product_1 = require("./Product");
let AttributeValue = class AttributeValue {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", Number)
], AttributeValue.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], AttributeValue.prototype, "name", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => Attribute_1.Attribute),
    tslib_1.__metadata("design:type", Attribute_1.Attribute)
], AttributeValue.prototype, "attribute", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [Product_1.Product], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], AttributeValue.prototype, "products", void 0);
AttributeValue = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], AttributeValue);
exports.AttributeValue = AttributeValue;
//# sourceMappingURL=AttributeValue.js.map
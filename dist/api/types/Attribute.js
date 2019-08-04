"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const AttributeValue_1 = require("./AttributeValue");
let Attribute = class Attribute {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", Number)
], Attribute.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Attribute.prototype, "name", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => [AttributeValue_1.AttributeValue], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], Attribute.prototype, "values", void 0);
Attribute = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], Attribute);
exports.Attribute = Attribute;
//# sourceMappingURL=Attribute.js.map
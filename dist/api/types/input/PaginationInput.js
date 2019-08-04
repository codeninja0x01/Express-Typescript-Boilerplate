"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
var ORDER_BY;
(function (ORDER_BY) {
    ORDER_BY["asc"] = "ASC";
    ORDER_BY["desc"] = "DESC";
})(ORDER_BY || (ORDER_BY = {}));
var ORDER;
(function (ORDER) {
    ORDER["id"] = "id";
    ORDER["name"] = "name";
})(ORDER || (ORDER = {}));
type_graphql_1.registerEnumType(ORDER, { name: 'ORDER' });
type_graphql_1.registerEnumType(ORDER_BY, { name: 'ORDERBY' });
let PaginationInput = class PaginationInput {
};
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumberString(),
    type_graphql_1.Field(() => type_graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], PaginationInput.prototype, "offset", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumberString(),
    type_graphql_1.Field(() => type_graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], PaginationInput.prototype, "limit", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(ORDER_BY),
    type_graphql_1.Field(() => ORDER_BY),
    tslib_1.__metadata("design:type", String)
], PaginationInput.prototype, "orderBy", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(ORDER),
    type_graphql_1.Field(() => ORDER),
    tslib_1.__metadata("design:type", String)
], PaginationInput.prototype, "order", void 0);
PaginationInput = tslib_1.__decorate([
    type_graphql_1.ArgsType()
], PaginationInput);
exports.PaginationInput = PaginationInput;
//# sourceMappingURL=PaginationInput.js.map